const movieService = require('../services/movieService');
const testController = (req, res) => {
    res.status(200).send("estamos recibiendo su solicitud");
};

const getMovies = async (req, res) => {

    // En este punto se consultaría a la base de datos o a una API externa
    // para obtener la información de las películas.

    // Mensaje temporal mientras se implementa la consulta
    // const message = 'Próximamente estarán disponibles los datos de películas.';

    // res.status(200).send(message);

    try {
        // Realiza la solicitud a la API externa
        const response = await fetch('https://students-api.up.railway.app/movies');

        // Verifica si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('Error al obtener los datos de las películas.');
        }

        // Parsea la respuesta como JSON
        const movies = await response.json();

        // Almacena las películas en movieService
        movieService.setMovies(movies);

        // Envía los datos de las películas al cliente
        res.status(200).json(movies);
    } catch (error) {
        // Maneja cualquier error que ocurra durante la solicitud o la conversión a JSON
        console.error('Error al obtener las películas:', error);
        res.status(500).send('Error al obtener los datos de las películas.');
    }

};

module.exports = {
    testController,
    getMovies,
};