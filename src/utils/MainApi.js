function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(res.status); //если не ок, то возвращаем статус
    }
    return res.json();
}

export const BASE_URL = "http://localhost:3333/api";

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
            "Authorization": `${token}`
        },
        body: JSON.stringify({ email, name })
    })
        .then(res => getResponseData(res));
}