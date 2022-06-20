import React from 'react';

const Post = ({post:{id,userId,title,body},getPostId}) => {
    return (
        <div>
            <div>idUser: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
            <button onClick={()=>getPostId(id)}>Comments</button>
        </div>
    );
};

export default Post;
