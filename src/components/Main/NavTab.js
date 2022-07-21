import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function NavTab() {
  return (
    <nav className="nav-tab">
        <Link to="#aboutProject" className="nav-tab__item">О проекте</Link>
        <Link to="#technology"  className="nav-tab__item">Технологии</Link>
        <Link to="#aboutMe" className="nav-tab__item">Студент</Link>
    </nav>
  );
}
export default NavTab;
