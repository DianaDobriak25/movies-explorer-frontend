import React from 'react';
import searchForm from '../../images/search.svg';

function SearchForm(props) {
    const [checked, setChecked] = React.useState(false);
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        const searchData = localStorage.getItem('searchData');
        if (!searchData) return;
        const parseData = JSON.parse(searchData);
        setSearch(parseData.search);
        setChecked(parseData.checked);
        console.log('checked: ', checked);
    }, []);

    function handleChengeCheckbox() {
        const newChecked = !checked;
        setChecked(newChecked);
        props.onShort({ search, checked: newChecked });
    }

    function handleSearchChange(evt) {
        setSearch(evt.target.value);
    }

    function handleMoviesSubmit(evt) {
        evt.preventDefault();
        props.onSearch({ search, checked });
    }


    return (
        <div className="search-form">
            <form className="search-form__container" onSubmit={handleMoviesSubmit} >
                <input type="text" name="name" className="search-form__input" id="#" placeholder="Фильм" value={search} onChange={handleSearchChange} />
                <button type="submit" className="search-form__button">
                    <img className="search-form__image" alt="Кнопка поиска" src={searchForm} />
                </button>
            </form>
            <div className="search-form__line" />
            <div className="search-form__short-films">
                <label className="search-form__checkbox">
                    <input className='search-form__checkbox-input' type="checkbox" checked={checked} onChange={handleChengeCheckbox} />
                    <span className="search-form__checkbox-switch"></span>
                </label>
                <p className='search-form__short-films-title'>Короткометражки</p>
            </div>
        </div>
    )
}

export default SearchForm;