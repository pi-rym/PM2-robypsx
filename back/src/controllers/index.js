const testController = (req, res) => {
    res.status(200).send("estamos recibiendo su solicitud");
};

const getMovies = (req, res) => {
    // En este punto se consultaría a la base de datos o a una API externa
    // para obtener la información de las películas.
  
    // Mensaje temporal mientras se implementa la consulta
    const message = 'Próximamente estarán disponibles los datos de películas.';
  
    res.status(200).send(message);
  };

module.exports = {
    testController,
    getMovies,
};