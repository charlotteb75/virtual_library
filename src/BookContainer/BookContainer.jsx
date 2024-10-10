import Book from "../Book/Book";
import './BookContainer.css'


function BookContainer({books}){


    return(
        <div className="book-grid">
            {books.map((book, index) =>(
                <Book
                key={index}
                id={book.id}
                name={book.name}
                description={book.description}
                cover = {book.cover}
                genre={book.genre}
                tags={book.tags}/>
            ))}
        </div>
    );
};

export default BookContainer;