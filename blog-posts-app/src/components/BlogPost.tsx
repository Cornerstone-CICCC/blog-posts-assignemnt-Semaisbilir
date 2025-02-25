import React from "react";
import { Post } from "../types/Post";

interface BlogPostProps {
    post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
    return (
        <div className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>
                <strong>Author:</strong> {post.userId}
            </p>
        </div>
    );
};

export default BlogPost;
