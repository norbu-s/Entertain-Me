        module.exports = (sequelize, DataTypes) => {
       
        const Movies = sequelize.define('Movies', {
    
            title: DataTypes.STRING,
            genre: DataTypes.STRING,
            plot: DataTypes.STRING,
            director: DataTypes.STRING,
            actors: DataTypes.STRING,
            year: DataTypes.INTEGER,
            image: { 
                type: sequelize.BLOB('long')
            }
        }, 
     
        {
            timestamps: false
        
        });
          return Movies;
      };
//  });
  