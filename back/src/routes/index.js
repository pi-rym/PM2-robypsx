const { Router } = require("express");
const { testController, getMovies  } = require("../controllers/moviesController")

const router = Router();

router.get("/", testController);
router.get("/movies", getMovies);


module.exports = router;