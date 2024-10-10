
import React, { useState } from "react";
import './Search.css'


function Search({handleGenreChange, handleSearchChange}){



    function handleInputChange(event){
        console.log(event.target.value);
        handleSearchChange(event.target.value);
        
    }

    function handleSelectChange(event){
        handleGenreChange(event.target.value);
    }

    return(<div className="sidebar">
        <form>
        
            <input className="search-input" onChange={handleInputChange} id="search" type="search" pattern=".*\S.*" required placeholder="Search.."/>
            
        </form>
        
        
        <select className="search-select"  onChange={handleSelectChange}>
            <option value="">Sélectionner un genre</option>
            <option value="Science-Fiction">Science-Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Historique">Historique</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Drame">Drame</option>
            <option value="Essai">Essai</option>
        </select>   
        <img src="http://localhost:5173/src/assets/search-interface-symbol.png" alt="" />
    </div>)

}

export default Search