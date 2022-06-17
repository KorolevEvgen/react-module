import React from 'react';

const Post = ({post:{id,userId,title,body}}) => {
    return (
        <div>
            <div>idUser: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Post;
