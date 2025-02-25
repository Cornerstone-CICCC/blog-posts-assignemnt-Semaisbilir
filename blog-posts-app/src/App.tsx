import React from "react";
import BlogPostList from "./components/BlogPostList";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Blog Posts</h1>
            <BlogPostList />
        </div>
    );
};

export default App;
