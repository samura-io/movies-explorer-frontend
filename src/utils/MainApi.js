class Api {
    constructor () {
        this._baseUrl = 'https://api.samura.io.nomoredomainsicu.ru';
        this._headers = {
            'Content-Type': 'application/json'
          }
    };

    _checkResponse = (res) => {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`)
        };
};

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            credentials: 'include',
        })
        .then(this._checkResponse);
    };

    updateUserInfo(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            credentials: 'include',
            body: JSON.stringify({
                name: name,
                email: email,
            })
        })
        .then(this._checkResponse);
    };

    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: this._headers,
            credentials: 'include',
        })
        .then(this._checkResponse);
    };

    createMovie(country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId) {
        return fetch(`${this._baseUrl}/movies`, {
            headers: this._headers,
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                nameRU,
                nameEN,
                thumbnail,
                movieId
            })
        })
        .then(this._checkResponse);
    };

    
    deleteMovies(id) {
        return fetch(`${this._baseUrl}/movies/${id}`, {
            headers: this._headers,
            credentials: 'include',
            method: 'DELETE',
        })
        .then(this._checkResponse);
    };

    register(email, password, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: password,
                email: email,
                name: name,
            })
        })
        .then(this._checkResponse);
    }

    login(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify({
                password: password,
                email: email,
            })
        })
        .then(this._checkResponse);
    }

    logout() {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'GET',
            credentials: 'include',
        })
        .then(this._checkResponse);
    }

    checkAuth() {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: 'include',
            method: 'GET',
        })
        .then(this._checkResponse);
    }    
}

export default new Api();
