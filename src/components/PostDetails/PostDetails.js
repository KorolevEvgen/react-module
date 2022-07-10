import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

const PostDetails = () => {

    const [post,setPost] = useState(null);
    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
    })

    return (
        <div>
            {post &&(
          <div>
              <div>Id: {post.id}</div>
              <div>UserId: {post.userId}</div>
              <div>Title: {post.title}</div>
              <div>Body: {post.body}</div>
          </div>
                )}
        </div>
    );
};

export default PostDetails;
