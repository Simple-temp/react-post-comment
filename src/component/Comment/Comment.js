import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShowCommens from '../ShowCommens/ShowCommens';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: " rgb(245, 245, 245)",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Comment = () => {


    const classes = useStyles();


    const  {userId}  = useParams();
    const [singlePost, setsinglePost] = useState([]);
    const [comment, setComment] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(response => response.json())
        .then(data => setsinglePost(data))
    },[])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
        .then(response => response.json())
        .then(data => setComment(data))
    },[])

    const {title,body} = singlePost;

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Title : {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Body : {body}
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                <Button variant="contained" color="primary">Comments are below</Button>
                </CardActions>
            </Card>
            {
                comment.map(comments=> <ShowCommens comment={comments} key={comments.postId}></ShowCommens>)
            }
        </div>
    );
};

export default Comment;
