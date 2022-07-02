import React from 'react';
import searchForm from '../../images/search.svg';

function SearchForm() {
    const [checked, setChecked] = React.useState(true);

    function chengeCheckbox() {
        setChecked(!checked);
    }


    return (
        <div className="search-form">
            <form className="search-form__container" >
                <input type="text" name="name" className="search-form__input" id="#" placeholder="Фильм" />
                <button type="submit" className="search-form__button"><img className="search-form__image" alt="Кнопка поиска" src={searchForm} /></button>
            </form>
            <div className="search-form__line" />
            <div className="search-form__short-films">
                <label className="search-form__checkbox">
                    <input className='search-form__checkbox-input' type="checkbox" checked={checked} onChange={chengeCheckbox} />
                    <span className="search-form__checkbox-switch"></span>
                </label>
                <p className='search-form__short-films-title'>Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm;