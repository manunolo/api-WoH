module.exports = (sequelize, dataTypes) => {
    let alias = 'Items';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        id_tipo: {
            type: dataTypes.TINYINT,
        },
        id_jugador: {
            type: dataTypes.BIGINT(10),
        },
        ataque: {
            type: dataTypes.TINYINT,
        },
        defensa: {
            type: dataTypes.TINYINT,
        },
        equipado: {
            type: dataTypes.TINYINT(1),
        },
    };
    let config = {
        tableName : 'items',
        timestamps : false,
    }

    const Items = sequelize.define(alias, cols, config);

    Items.associate = function(models) {
        Items.hasOne(models.ItemsTipo, {
            as : 'item_tipo',
            foreignKey : 'id',
        });
        Items.hasOne(models.Jugadores, {
            as : 'jugador',
            foreignKey : 'id',
        });
    };

    return Items
};