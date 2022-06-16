import {useEffect, useState} from 'react';
import Comment from '../comment/Comment';
import './Comments.css'



const Comments = () => {
    const [comments,setComments] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then (value => setComments(value))
    }, [])
    return (
        <div className={'commentsStyle'}>
            {comments.map(value => <Comment key={value.id} postId={value.postId} id ={value.id}  name ={value.name}  email={value.email} />)}
            {comments.name}
        </div>
    );
};

export default Comments;
