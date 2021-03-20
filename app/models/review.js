module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
     
    });
    return Review;
  };
  console.log("review.js");