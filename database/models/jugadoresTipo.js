module.exports = (sequelize, dataTypes) => {
    let alias = 'JugadoresTipo';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        id_tipo: {
            type: dataTypes.TYNYINT,
        },
        vida: {
            type: dataTypes.TINYINT,
        },
    };
    let config = {
        tableName : 'jugadores',
        timestamps : false,
    }

    const Jugadores = sequelize.define(alias, cols, config);

    Jugadores.associate = function(models) {
        Jugadores.belongsTo(models.JugadoresTipo, {
            as : 'productoscat',
            through : 'Jugadores_producto',
            foreignKey : 'id_Jugadores',
            otherKey : 'id_producto',
            timestamps : false,
        });
    }

    return Jugadores
};