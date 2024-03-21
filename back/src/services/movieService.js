let moviesArray = []; // Array donde se almacenarán las películas

const setMovies = (movies) => {
    moviesArray = movies; // Establece el array de películas
};

const getMovies = () => {
    return moviesArray; // Retorna el array de películas
};

module.exports = {
    setMovies,
    getMovies,
};