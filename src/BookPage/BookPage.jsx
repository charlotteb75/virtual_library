
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import './BookPage.css';


function BookPage({books}){

    const {id} = useParams();
    const book = books.find(b=> b.id === parseInt(id));

    if(!book){
        return <div> Book not found</div>
    }

    return(
        <div className='book-detail-container'>
            <div className='book-detail-cover'>
            <img src={book.cover} alt={book.name} />
            </div>
        <div className='book-details'>
        <h1 className='book-detail-title' > {book.name}
        <p className='book-detail-auteur'> {book.auteur}</p>
        <p className='book-detail-genre'>Genre : {book.genre}</p></h1> 
        
             <p className='book-detail-description'> {book.description_detail}</p>
             
             <div className='book-detail-tags'>
             {book.tags && book.tags.map((tag, index) => <span key={index} className='book-detail-tag'>{tag}</span>)}
             </div>
             </div>
             </div>);
}

BookPage.proptypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
    description: PropTypes.string
}



export default BookPage