function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(res.status); //если не ок, то возвращаем статус
    }
    return res.json();
}

export const MOVIES_API = "https://api.nomoreparties.co/beatfilm-movies";

export const getMovies = () => {
    return fetch(`${MOVIES_API}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    })
        .then(res => getResponseData(res));
}