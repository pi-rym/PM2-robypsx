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

// module.exports = {
//     getMovies: async (req, res) => {
//          try {
//              const movies = await movieService.getMovies(); // Debes usar await para esperar la respuesta del servicio
//              res.status(200).json(peliculas);
//          } catch (error) {
//              console.error('Error al obtener las películas:', error);
//              res.status(500).json({ error: 'Error interno del servidor' });
//          }
//      },
 
//      createMovie: async (req, res) => {
//          try {
//              const {title, year, director, duration, genre, rate, poster} = req.body;
//              // console.log(title);
//              const newMovie = await movieService.createMovie({title, year, director, duration, genre, rate, poster});
//              res.status(201).json(newMovie);
//              console.log("se creo correctamente");
//          } catch (error) {
//              res.status(500).json({
//                  error: "Error al crear movie",
//              });
//          }
 
//      }
     
//  };