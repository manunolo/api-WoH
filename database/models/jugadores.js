module.exports = (sequelize, dataTypes) => {
    let alias = 'Jugadores';
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
            type: dataTypes.TINYINT,
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
        Jugadores.hasOne(models.JugadoresTipo, {
            as : 'jugadorTipo',
            foreignKey : 'id_tipo',
        });
    }

    Jugadores.findById = (id) =>{
        return Jugadores.findOne({
            where:{
                id
            }
        }).then(jugador=>jugador);
    }

    return Jugadores
};