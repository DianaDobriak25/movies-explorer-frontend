import React from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext'; //импортируем объект контекста
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Autorization/Register.js';
import Login from '../Autorization/Login.js';
import Profile from '../Autorization/Profile.js';
import api from '../../utils/api';
import { login, register, getUserInfo } from '../../utils/MainApi';
import ErrorModal from '../ErrorModal';
import RequireAuth from '../RequiredAuth';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  const history = useNavigate();

  const [isErrorModal, setIsErrorModal] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({}); //currentUser может быть либо null, либо пустым объектом, либо объектом с name, email
  const [loggedIn, setLoggedIn] = React.useState(false);



  React.useEffect(() => {
    // данные, которые хранятся бессрочно и будут доступны даже после перезагрузки браузера. Возвращаем эти данные и делаем проверку.
    const jwt = localStorage.getItem('jwt');
    if (!jwt) return;
    getUserInfo(jwt).then(data => {
      setCurrentUser(data);
      setLoggedIn(true);
      history("/");
    }).catch(err =>{
      console.log(err);
    });
  })


  //обработка данных входа на сайт и проверка на ошибки. Отправка формы
  function handleLogin(params) {
    login(params.email, params.password).then(data => {
      // после получения токена делаем запрос на получение данных пользователя
      //добавляем в localStorage токен,
      //а при входе на страницу смотрим, есть ли у нас уже этот токен, если да - то получаем сразу данные пользователя по этому токену
      localStorage.setItem('jwt', data.token);
      api.updateToken(data.token)
      getUserInfo(data.token).then(data => {
        setCurrentUser(data);
        setLoggedIn(true);
        history("/");
      });
    }).catch(err => {
      setIsErrorModal(true);
    })
  }

  //обработка данных для регистрации на сайте, и проверка на ошибки. Отправка формы
  function handleRegister(params) {
    register(params.name, params.email, params.password).then(data => {
      handleLogin(params);
      setIsErrorModal(true);
    }).catch(err => {
      console.log(err);
    })
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {/* В зависимости от роута будет или Main или Movies или SavedMovies */}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/movies" element={<RequireAuth loggedIn={loggedIn}>
            <Movies />
          </RequireAuth>} />
          <Route exact path="/saved-movies" element={<RequireAuth loggedIn={loggedIn}>
            <SavedMovies />
          </RequireAuth>} />
          <Route exact path="/profile" element={<RequireAuth loggedIn={loggedIn}>
            <Profile />
          </RequireAuth>} />
          <Route path="/sign-up" element={<Register onRegister={handleRegister} />} />
          <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
        </Routes>
        <ErrorModal
          isOpen={isErrorModal}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
