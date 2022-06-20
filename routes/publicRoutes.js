const express = require("express");
const publicRouter = express.Router();
const reviewController = require("../controllers/reviewController");

// Rutas del Públicas:
publicRouter.get("/review/:movieId", reviewController.getReviews);
publicRouter.post("/review/:movieId", reviewController.postReview);

module.exports = publicRouter;
