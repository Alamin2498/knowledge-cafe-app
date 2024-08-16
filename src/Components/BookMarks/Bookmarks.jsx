import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
export default function Bookmarks({bookmarks,readingTime}){
    return (
        <div className="md:w-1/3 text-center bg-gray-300 ml-4 mt-4 pt-4" >
            <div>
                <h2 className='text-4xl'> ReadingTime:{readingTime}</h2>
            </div>
            <h2 className="text-4xl">Bookmarked blogs:{bookmarks.length} </h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}