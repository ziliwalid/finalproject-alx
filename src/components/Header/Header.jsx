import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Get transported to another world reader</h2><br />
                <p className='header-text fs-17 fw-4'>Welcome to HyrulianArchive, the ultimate online library dedicated to the world of The Legend of Zelda. Explore an extensive collection of lore, maps, and guides that span every game in the series. Join fellow adventurers in uncovering the secrets of Hyrule!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header