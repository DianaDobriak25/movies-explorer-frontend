import React from 'react';
import headerLogo from '../images/logo__COLOR_main-1.png';
// импортируем useLocation для того, чтобы получить текущий url страницы
import { Link, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import user from '../images/user.svg';


function Header(props) {
  const [isBurger, setIsBurger] = React.useState(false);
  const headerClassName = `header${props.loggedIn ? ' header_white' : ''}`;
  const headerBurgerClassName = `header__burger${isBurger ? ' header__burger_active' : ''}`;

  function handleIsBurgerClick() {
    setIsBurger(!isBurger);
  }

  return (
    <header className={headerClassName}>
      <div className='header__container'>
        <Link className="header__navigate-project" to="/" >
          <img className="header__logo" alt="Логотип" src={headerLogo} />
        </Link>
        {props.loggedIn ? <Navigation /> : null}
        <nav className="header__navigate">
          {/* Проверяем, если мы находимся на странице регистрации т.е. путь равен /sign-up то показываем ссылку Войти, иначе ссылку на Регистрация */}
          {props.loggedIn
            ?
            <>
              <Link className="header__navigate-profile" to="/profile" >
                <p className="header__navigate-profile-text">Аккаунт</p>
                <img className="header__navigate-profile-image" alt="Логотип аккаунта" src={user} />
              </Link>
              <button className="header__burger-btn" onClick={handleIsBurgerClick}>
                <span className='header__burger-line'></span>
                <span className='header__burger-line'></span>
                <span className='header__burger-line'></span>
              </button>
            </>
            :
            <Routes>
              <Route path="/" element={
                <>
                  <Link className="header__navigate-sign-up" to="/sign-up" >Регистрация</Link>
                  <Link className="header__navigate-sign-in" to="/sign-in" >Войти</Link>
                </>
              } />
            </Routes>
          }
        </nav>
        <nav className={headerBurgerClassName} >
          <button className='header__burger-close' onClick={handleIsBurgerClick}></button>
          <ul className='header__burger-menu'>
            <li className='header__burger-menu-item'>
              <Link className="header__burger-link" to="/" >Главная</Link>
            </li>
            <li className='header__burger-menu-item'>
              <Link className="header__burger-link" to="/movies" >Фильмы</Link>
            </li>
            <li className='header__burger-menu-item'>
              <Link className="header__burger-link" to="/saved-movies" >Сохраненные фильмы</Link>
            </li>
          </ul>
          <div className='header__burger-footer'>
            <Link className="header__navigate-profile" to="/profile" >
              <p className="header__navigate-profile-text">Аккаунт</p>
              <img className="header__navigate-profile-image" alt="Логотип аккаунта" src={user} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;

