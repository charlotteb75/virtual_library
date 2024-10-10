import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import BookPage from './BookPage/BookPage.jsx';
import Footer from './Footer/Footer.jsx';
import Search from './Search/Search.jsx';
import cover1984 from './assets/1984.png';
import coverMachine from './assets/machine.png';
import coverJeux from './assets/hommesjeux.png';
import coverYellow from './assets/yellowface.png';
import coverRacines from './assets/racines.png';
import coverMonte from './assets/montecristo.png';
import coverVallee from './assets/vallee.png';
import coverOrque from './assets/orque.png';
import coverFourmis from './assets/fourmis.png';
import coverParfum from './assets/parfum.png';
import coverRencontre from './assets/rencontre.png';
import coverBonheur from './assets/bonheur.png';
import coverCrepuscule from './assets/crepuscule.png';
import coverCharlotte from './assets/charlotte.png';
import BookContainer from './BookContainer/BookContainer.jsx';
import './App.css'; // Import du CSS pour s'assurer que le style est bien pris en compte

function App() {

  axios.get('http://localhost:5000/books')
    .then(response=> {
      setFilteredBooks(response.data);
    })
    .catch(error=> {
      ("Il y a eu une erreur", error);
  });
 

  const books = [
    { id: 0, name: "1984", description: "Un classique de SF des années 50 sur la surveillance de masse", description_detail: "L’histoire se déroule en 1984 (comme l'indique le titre du roman), à Londres...", cover: cover1984, genre: 'Science-Fiction', link: "http://localhost:5173/1984", tags: ["SF", "Classique"], auteur: "Georges Orwell" },
    { id: 1, name: "La machine s'arrête", description: "Une vieille mais très visionnaire nouvelle de SF des années 20", cover: coverMachine, genre: 'Science-Fiction', link: "http://localhost:5173/1984", tags: ["SF", "Classique"], auteur: "E. M. Forster" },
    { id: 2, name: "L'homme des jeux", description: "Un classique de space opera un peu loufoque", cover: coverJeux, genre: 'Science-Fiction', link: "http://localhost:5173/1984", tags: ["SF", "Classique", "Space Opera"], auteur: "Iain M. Banks" },
    { id: 3, name: "Yellowface", description: "Thriller satirique bien ficelé sur la vie d'auteur dans l'époque moderne", cover: coverYellow, genre: 'Thriller', link: "http://localhost:5173/1984", tags: ["Thriller", "Social Media"], auteur: "R. F. Kuang" },
    { id: 4, name: "Les racines du ciel", description: "Une épopée sur la condition humaine au coeur de l'Afrique", cover: coverRacines, genre: 'Drame', link: "http://localhost:5173/1984", tags: ["Drame", "Classique", "Afrique"], auteur: "Romain Gary" },
    { id: 5, name: "La vallée du silicium", description: "Un essai sur le pouvoir des nouvelles technologies dans la Silicon Valley", cover: coverVallee, genre: 'Essai', link: "http://localhost:5173/1984", tags: ["Essai", "Silicon Valley"], auteur: "Alain Damasio" },
    { id: 6, name: "Le comte de Monte-Cristo", description: "Un classique de la literature française : récit épique sur fond de chasse au trésor et de vengeance", cover: coverMonte, genre: 'Drame', link: "http://localhost:5173/1984", tags: ["Drame", "Classique", "Épique"], auteur: "Alexandre Dumas" },
    { id: 7, name: "La trilogie baryonique Vol.1", description: "Dans un monde futuriste où les humains voyagent dans l'espace, un accident menace l'avenir de l'humanité", cover: coverOrque, genre: 'Science-Fiction', link: "http://localhost:5173/1984", tags: ["SF", "Voyage Spatial"], auteur: "Auteur inconnu" },
    { id: 8, name: "Les fourmis", description: "Thriller de science-fiction qui nous fait découvrir la magie des fourmis", cover: coverFourmis, genre: 'Science-Fiction', link: "http://localhost:5173/1984", tags: ["SF", "Insectes", "Philosophie"], auteur: "Bernard Werber" },
    { id: 9, name: "La rencontre", description: "Qu'est-ce qu'une véritable rencontre ?", cover: coverRencontre, genre: 'Essai', link: "http://localhost:5173/1984", tags: ["Essai", "Amour", "Philosophie"], auteur: "Auteur inconnu" },
    { id: 10, name: "Au bonheur des dames", description: "Classique entre journalisme et fiction : récit autour de l'ouverture du bon marché à Paris", cover: coverBonheur, genre: 'Drame', link: "http://localhost:5173/1984", tags: ["Drame", "Classique", "Paris"], auteur: "Émile Zola" },
    { id: 11, name: "Le crépuscule et l'aube", description: "Fiction historique de la période moyenâgeuse : famille, amour, guerre, religion...", cover: coverCrepuscule, genre: 'Historique', link: "http://localhost:5173/1984", tags: ["Historique", "Moyen-Âge"], auteur: "Ken Follett" },
    { id: 12, name: "Le parfum d'Adam", description: "Thriller sur fond de problématiques écologiques", cover: coverParfum, genre: 'Thriller', link: "http://localhost:5173/1984", tags: ["Thriller", "International", "Écologie"], auteur: "Jean-Christophe Rufin" },
    { id: 13, name: "Moi, Charlotte Simmons", description: "Un récit sur le passage à la maturité dans les USA des années 2000", cover: coverCharlotte, genre: 'Drame', link: "http://localhost:5173/1984", tags: ["Drame", "Université", "USA"], auteur: "Tom Wolfe" },
  ];

  const [genre, setGenre] = useState('');
  const [keywords, setKeywords] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const filterBooks = () => {
    let filtered = books;

    if (genre !== '') {
      filtered = filtered.filter(book => book.genre === genre);
    }

    if (keywords !== '') {
      filtered = filtered.filter((book) =>
        book.name.toLowerCase().includes(keywords.toLowerCase()) ||
        book.description.toLowerCase().includes(keywords.toLowerCase()) ||
        book.auteur.toLowerCase().includes(keywords.toLowerCase()) ||
        book.tags.some(tag => tag.toLowerCase().includes(keywords.toLowerCase()))
      );
    }

    setFilteredBooks(filtered);
  };

  const handleGenreChange = (genre) => {
    setGenre(genre);
  };

  const handleSearchChange = (keywords) => {
    setKeywords(keywords);
  };

  useEffect(() => {
    filterBooks();
  }, [genre, keywords]);

  return (
    <div>
    <div className="homepage-container">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
            
              {/* Sidebar pour les filtres */}
              <div className='filter-section'>
              <Search  handleGenreChange={handleGenreChange} handleSearchChange={handleSearchChange} />
              </div>
              
              <div className='main-content'>
              {/* Grille des livres */}
              <BookContainer  books={filteredBooks} />
              </div>
            </>
          } />
          <Route path="/book/:id" element={<BookPage books={books} />} />
        </Routes>
        
      </Router>
    </div>
    <div><Footer /></div>
    </div>
  );
}

export default App;



