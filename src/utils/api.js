//класс позволяющий делать запросы для тех или иных действий(добавить карточки, загрузить карточки итд).
class Api {
    constructor({ address, token }) {
        this._address = address;
        this._token = token;
    }

    _url(query) {
        return `${this._address}/${query}`
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    _get(query) {
        const option = {
            headers: {
                authorization: this._token
            }
        }
        return fetch(this._url(query), option).then(res => this._getResponseData(res));
    }

    _set(query, method, body) {
        const option = {
            method,
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
        return fetch(this._url(query), option).then(res => this._getResponseData(res));
    }

    
    // Обновить токен для данного экземпляра Api
    updateToken(token) {
        this._token = token;
    }
}

const instance = new Api({
    address: 'http://localhost:3333',
    token: `${localStorage.getItem('jwt')}`
})

export default instance;