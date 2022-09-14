module.exports = (sequelize, dataTypes) => {
    let alias = 'JugadoresTipo';
    let cols = {
        id: {
            type: dataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName : 'jugadores_tipo',
        timestamps : false,
    }

    const JugadoresTIpo = sequelize.define(alias, cols, config);

    JugadoresTIpo.associate = function(models) {
        JugadoresTIpo.hasMany(models.Jugadores, {
            foreignKey : 'id',
            timestamps : false,
        });
    }

    return JugadoresTIpo;
};