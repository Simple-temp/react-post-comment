import React from 'react';
import './ShowCommens.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from 'react';

const ShowCommens = (props) => {

    const [Like, setLike] = useState('');

    const {comment} = props;
    const {name,body,postId} = comment;
    return (
        <div className='row mt-3'>
            <div className="col-lg-1 col-md-1 col-sm-1">
                <img src={"https://imagizer.imageshack.com/img924/2149/K5ZlUR.png"} className='img' alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 p row-inner">
                <p> <b>Name</b>  : {name}</p>
                <p> <b>Comment</b>  : {body}</p>
                <ThumbUpIcon onClick={()=>setLike(Like ? '' : 'primary')} color={Like} ></ThumbUpIcon>
            </div>
        </div>
    );
};

export default ShowCommens;