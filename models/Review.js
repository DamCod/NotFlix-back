module.exports = (sequelize, Model, DataTypes) => {
  class Review extends Model {}

  Review.init(
    {
      username: { type: DataTypes.TEXT },
      rating: { type: DataTypes.BIGINT, allowNull: false },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      movieId: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "review",
    },
  );

  return Review;
};
