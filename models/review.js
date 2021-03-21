
  
  module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: 'Personal',
      },
    });
    return Review;
  };
  