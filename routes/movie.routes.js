
module.exports = app => {
    const router = require("express").Router();
    const movies = require ( "../controllers/movie.controller" );

    router.post("/", movies.create);
    //router.get("/", movies.findAll);
    router.put("/:id", movies.update);

    app.use('/api/movies', router);

}