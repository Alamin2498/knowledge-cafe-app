import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog"
export default function Blogs({handleAddBookmarks,markAsRead}){
    const [blogs,setBologs]= useState([])

    useEffect(()=>{
        fetch ('Blogs.json')
        .then(res=> res.json())
        .then(data=>setBologs(data))
    },[])
    return (
        <div className=" md:w-2/3">
            <h1 className="text-4xl">Blogs :{blogs.length}</h1>
           {
            blogs.map(blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleAddBookmarks={handleAddBookmarks}
                markAsRead={markAsRead}
                ></Blog>)
           }
           
        </div>
    )
}
Blogs.prototypes={
    handleAddBookmarks:PropTypes.func.isRequired,
   
    markAsRead: PropTypes.func.isRequired
}