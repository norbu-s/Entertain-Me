module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {


    // I'm skipping this part 
    
    movieId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
      primaryKey: true,

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
      defaultValue: 'Streaming'

  }
},

//now add timestamps

{timestamps: false});


  return Review;
};


  
    // id: {
    //   type: DataTypes.DECIMAL,
    //   allowNull: false,
    //   validate: {
    //     len: [1],
    //   },

    // },

      // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1],
    //   },
    // },