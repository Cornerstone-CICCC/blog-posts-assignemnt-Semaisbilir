import React, { useState, useEffect } from "react";
import { Post } from "../types/Post";
import BlogPost from "./BlogPost";

const BlogPostList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data: Post[]) => {
                setPosts(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch posts");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {posts.map((post) => (
                <BlogPost key={post.id} post={post} />
            ))}
        </div>
    );
};

export default BlogPostList;
