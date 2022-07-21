import React from 'react';
import { Link } from 'react-router-dom';



function Navigation() {
  return (
    <nav className="navigation">
      <Link className="header__navigate-movies" to="/movies" >Фильмы</Link>
      <Link className="header__navigate-saved-movies" to="/saved-movies" >Сохраненные фильмы</Link>
    </nav>
  );
}
export default Navigation;