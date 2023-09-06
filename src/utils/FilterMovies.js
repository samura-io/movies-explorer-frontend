function filterMovies(moviesList, keywords, isShortMovies) {
    const filteredArray = moviesList.filter((item)=> {
        if (isShortMovies) {
            return item.duration <= 40 && 
                (item['nameRU'].toLowerCase().includes(keywords.toLowerCase()) ||
                 item['nameEN'].toLowerCase().includes(keywords.toLowerCase()))
        } else {
            return item['nameRU'].toLowerCase().includes(keywords.toLowerCase()) ||
             item['nameEN'].toLowerCase().includes(keywords.toLowerCase())
        }
    })

    return filteredArray;
}

export default filterMovies;