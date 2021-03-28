module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1],
        max: 5,
        min: 1,
      },
    },
      author: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
      },  
    },
    source: {
      type: DataTypes.STRING,
      defaultValue: 'Streaming',
    }
  });

  return Review;
};
