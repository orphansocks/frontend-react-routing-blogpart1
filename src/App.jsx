import './App.css'
import React from "react"

import HomePage from "./pages/home/HomePage.jsx";
import BlogNewBlog from "./pages/blogNewBlog/BlogNewBlog.jsx";
import BlogOverview from "./pages/blogOverview/BlogOverview.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import NavBar from "./components/navbar/NavBar.jsx";


function App() {

    return (
        <>



            <NavBar/>
            <Routes>
                <Route path="/" element = {<HomePage/>} />
                <Route path="/blogoverview" element = {<BlogOverview/>} />
                <Route path="/blognewblog" element = {<BlogNewBlog/>} />
                <Route path="/notfound" element = {<NotFound/>} />
                <Route path="*" element = {<NotFound/>}/>
                <Route path="/posts/:postId" element = {<BlogSinglePost/>}/>

            </Routes>

        </>
    )
}

export default App
