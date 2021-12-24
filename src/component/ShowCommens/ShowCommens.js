import React from 'react';
import './ShowCommens.css';

const ShowCommens = (props) => {
    const {comment} = props;
    const {name,body,postId} = comment;
    return (
        <div className='row row-inner'>
            <div className="col-lg-2 col-md-2 col-sm-2 d-flex justify-content-center align-items-center">
                <img src={"https://imagizer.imageshack.com/img924/2149/K5ZlUR.png"} className='img' alt="" />
            </div>
            <div className="col-lg-8 col-md-6 col-sm-6 p">
                <p> <b>Name</b>  : {name}</p>
                <p> <b>Comment</b>  : {body}</p>
            </div>
        </div>
    );
};

export default ShowCommens;