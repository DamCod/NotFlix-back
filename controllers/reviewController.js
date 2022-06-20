const { Review } = require("../models");

async function getReviews(req, res) {
  let reviews;
  try {
    reviews = await Review.findAll({ where: { movieId: req.params.movieId } });
    res.json(reviews);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
}

async function postReview(req, res) {
  let review;
  try {
    review = await Review.create({
      username: req.body.username ? req.body.username : "Anonymous",
      rating: Number(req.body.rating),
      content: req.body.content,
      movieId: req.params.movieId,
    });
    res.json({ "Review creada": review });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
}

// Otros handlers...
// ...

module.exports = {
  getReviews,
  postReview,
};
