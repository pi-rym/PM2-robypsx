require("dotenv").config();
const mongoose = require("mongoose");
const URI = process.env.URI;
//en este modulo hacer la conexion a la base de datos en una Funcion
// exportar esta funcion

const conDb = async () => {
    await mongoose.connect(`$(URI)`);
        console.log("Connected to MongoDB");
};

module.exports = conDb;