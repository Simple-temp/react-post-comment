import React from 'react';
import './Header.css';
import Post from '../Post/Post';
import { useState , useEffect } from 'react';
import Button from '@material-ui/core/Button';

const Header = () => {

    const [post, setPost] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => setPost(data))
    },[])

    return (
        <header>
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                    <Button variant="contained" color="primary" className='d-block mx-auto button'>Twitter</Button>
                </div>
            </div>
            <div className="container">
                {
                    post.map(news => <Post newsFeed={news} key={news.id}></Post>)
                }
            </div>
        </div>
        </header>
    );
};

export default Header;