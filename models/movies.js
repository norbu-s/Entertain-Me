module.exports = (sequelize, DataTypes) => {
    const movies = sequelize.define(
        "movies", {
            title: DataTypes.STRING,
            genre: DataTypes.STRING,
            plot: DataTypes.STRING,
            director: DataTypes.STRING,
            actors: DataTypes.STRING,
            year: DataTypes.INTEGER,
            image: DataTypes.BLOB("long"),
        },

        {
            timestamps: false,
        }
    );

    return movies;
};