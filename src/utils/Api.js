function onResponce(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res}`);
}

class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    getCards() {
        return fetch(`${this._url}/cards`, { // метод на получение всех карточек
                headers: this._headers,
            })
            .then(onResponce)
    }

    getUserInfo() { // получаем информацию о пользователе
        return fetch(`${this._url}/users/me`, {
                headers: this._headers,
            })
            .then(onResponce)
    }

    setCardLike(cardsId) {
        return fetch(`${this._url}/cards/${cardsId}/likes`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(onResponce)
    }


    removeCardLike(cardsId) {
        return fetch(`${this._url}/cards/${cardsId}/likes`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(onResponce)
    }

    changeAvatar(ava) {
        console.log(ava, "ava")
        return fetch(`${this._url}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: ava.avatar,
                })
            })
            .then(onResponce)
    }

    removeCard(cardsId) {
        return fetch(`${this._url}/cards/${cardsId}`, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(onResponce)
    }

    updateUserInfo(dataUser) {
        console.log(dataUser, "dataUser")
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: dataUser.name,
                about: dataUser.job
            })
        }).then(onResponce)
    }

    createNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        }).then(onResponce)
    }

}


const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-30',
    headers: { authorization: '3536cfe9-c417-41c1-9a2d-162801d02bdc', 'Content-Type': 'application/json' }
})

export default api;