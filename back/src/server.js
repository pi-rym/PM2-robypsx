const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");

const app = express();

// Middlewares
app.use(morgan("dev")); // Morgan para logs de solicitud
app.use(cors()); // CORS para permitir solicitudes desde el frontend
app.use(express.json());

app.use(router);

module.exports = app;