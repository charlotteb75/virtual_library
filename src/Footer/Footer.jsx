
import './Footer.css'


function Footer(){
    return(
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Virtual Library</p>
        </footer>
    );
}

export default Footer