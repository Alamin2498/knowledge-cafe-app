import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/BookMarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime]=useState(0)

  const markAsRead =(time)=>{
    console.log("marking as read",time);
    setReadingTime(readingTime+time)
  }


  const handleAddBookmarks = (blog) => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }
  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs  
        handleAddBookmarks={handleAddBookmarks}
        markAsRead={markAsRead}
        >
        
        </Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>

      </div>

    </>
  )
}

export default App
