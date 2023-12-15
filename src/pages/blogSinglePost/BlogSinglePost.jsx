import './BlogSinglePost.css';
import {useParams} from "react-router-dom";
import posts from  '../../constants/data.json';
import React from "react";

function BlogSinglePost() {
    const {postId} = useParams();
    const postContent = posts.find(({post}) => {return post.id.toString() === postId});

document.title = postId;

    return (
        <>
            <h1>Post Title {postContent.title}</h1>
            <h2>Sub Title {postContent.subtitle}</h2>
            <h3>Geschreven door ${postContent.author} op ${postContent.created} </h3>

            <p>Content {postContent.content}</p>
        </>
    );
}

export default BlogSinglePost;