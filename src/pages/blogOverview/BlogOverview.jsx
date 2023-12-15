import './BlogOverview.css';
import posts from  '../../constants/data.json';
import React from "react";

function BlogOverview() {
    return (

        <>

            <h1>Bekijk alle {posts.length} posts op het platform</h1>
            <p>En dan verschijnen hier de lijst met blogs</p>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id} >
                            <p>{post.title} ({post.author})</p>
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </li>
                    )

                    })}
            </ul>


        </>
    );
}

export default BlogOverview;