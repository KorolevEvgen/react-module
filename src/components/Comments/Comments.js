import React, {useEffect, useState} from 'react';
import {commentService} from '../../services/comment.service';
import Comment from '../Comment/Comment';

const Comments = ({ postId }) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(postId).then(value => setComments(value));
    }, [postId]);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;
