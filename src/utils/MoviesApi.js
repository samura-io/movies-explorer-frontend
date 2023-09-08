export default function getMoviesCards() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((res) => {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
    })
}
