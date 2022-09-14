module.exports = (sequelize, dataTypes) => {
    let alias = 'HistorialAtaques';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true,
        },
        id_atacante : {
            type: dataTypes.BIGINT,
        },
        id_defensor : {
            type: dataTypes.BIGINT,
        },
        id_ataque : {
            type: dataTypes.TINYINT,
        },
    };
    let config = {
        tableName : 'historial_ataques',
        timestamps : false,
    }

    const HistorialAtaques = sequelize.define(alias, cols, config);

    HistorialAtaques.associate = function(models) {
        HistorialAtaques.hasOne(models.Jugadores, {
            as : 'atacante',
            foreignKey : 'id',
        });
        HistorialAtaques.hasOne(models.Jugadores, {
            as : 'defensor',
            foreignKey : 'id',
        });
        HistorialAtaques.hasOne(models.AtaquesTipo, {
            as : 'tipo_ataque',
            foreignKey : 'id',
        });
    };

    return HistorialAtaques
};