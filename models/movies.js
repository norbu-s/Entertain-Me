        module.exports = (sequelize, DataTypes) => {

            const Movies = sequelize.define('Movies', {

                    id: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                    },

                    title: {
                        type: DataTypes.STRING,
                        allowNull: false,
                    },
                    genre: {
                        type: DataTypes.STRING,
                        allowNull: false,
                    },
                    plot: {
                        type: DataTypes.STRING,
                        allowNull: false,
                    },
                    director: {
                        type: DataTypes.STRING,
                        allowNull: false,
                    },
                    actors: {
                        type: DataTypes.STRING,
                        allowNull: false,
                    },
                    year: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                    },
                    image: {
                        type: DataTypes.BLOB('medium'),
                        allowNull: true,
                    },

                },

                {
                    timestamps: false,
                }
            );

            return movies;
        };