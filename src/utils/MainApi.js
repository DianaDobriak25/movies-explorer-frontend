function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(res.status); //если не ок, то возвращаем статус
    }
    return res.json();
}

export const BASE_URL = "https://api.testdomain12.site/api";

//Параметры запроса для регистрации в нашем сервисе:
export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    })
        .then(res => getResponseData(res)); //некорректно заполнено одно из полей
}

//Параметры запроса для авторизации в нашем сервисе.
export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => getResponseData(res));
}


export const getUserInfo = ({ token, email, name }) => {
    return fetch(`${BASE_URL}/users/me?email=${email}&name=${name}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `${token}`
        }
    })
        .then(res => getResponseData(res));
}


export const setUserInfo = ({ token, email, name }) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
        body: JSON.stringify({ email, name })
    })
        .then(res => getResponseData(res));
}


export const getSavedMovies = ({ token }) => {
    return fetch(`${BASE_URL}/movies`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `${token}`
        }
    })
        .then(res => getResponseData(res));
}


export const likeMovie = ({ token, item }) => {
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `${token}`
        },
        body: JSON.stringify(item)
    })
        .then(res => getResponseData(res));
}


export const dislikeMovie = ({ token, id }) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Authorization": `${token}`
        },
    })
        .then(res => getResponseData(res));
}