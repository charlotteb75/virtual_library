
import propTypes from 'prop-types'
import './Book.css';
import BookTag from '../BookTag/BookTag';
import { Link } from 'react-router-dom';

function Book(props){

    return(
        <div className="book-card">
            <Link to ={`/book/${props.id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
           
            <img className="book-image"  src={props.cover} alt="Profile picture" />
            {props.tags && (
            <p className='book-tags'>{props.tags.map((tag,index) => <BookTag className='book-tag' key={index} tag={tag} />)}</p>)}
            <h2 className='book-title' >{props.name}</h2>
            <p className='book-text'>{props.description}</p>
           
            </Link>
        </div>
    );
}

Book.propTypes = {
    name: propTypes.string,
    description: propTypes.string,
    cover: propTypes.string,
    genre: propTypes.string,
    tags: propTypes.array

}


export default Book