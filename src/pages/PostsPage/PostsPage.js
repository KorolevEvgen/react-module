import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {postService} from '../../services/post.service';
import Post from '../../components/Post/Post';
import './PostsPage.css'

const PostsPage = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(value => setPosts(value))
    })

    return (
        <div className={'postsPage'}>
            <div>
          <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;
