import PropTypes from 'prop-types';
import { BsBookmarkPlusFill } from "react-icons/bs";

const Blog = ({ blog , handleAddBookmarks ,markAsRead}) => {
    console.log(blog);
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 space-y-4'>
                <div className='flex'>
                    <img className='w-14 ' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'> {author}</h3>
                        <p className=''>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmarks(blog)} className='ml-4 text-red-200'> <BsBookmarkPlusFill></BsBookmarkPlusFill></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hashtags}</a></span>)
                }
                
            </p>
            <button className='text-purple-600' onClick={()=>markAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks:PropTypes.func.isRequired
}
export default Blog;
