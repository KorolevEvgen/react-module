import React, {useEffect, useState} from 'react';
import {postService} from '../../services/post.service';
import Post from '../Post/Post';

const Posts = ({userId,getPostId}) => {
    const [posts,setPosts] = useState([]);

    useEffect(()=> {
        postService.getByUserId(userId).then(value=>setPosts(value))
    },[userId])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} getPostId={getPostId}/>)}
        </div>
    )
};

export default Posts;
