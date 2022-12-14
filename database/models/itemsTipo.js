module.exports = (sequelize, dataTypes) => {
    let alias = 'ItemsTipo';
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
        tableName : 'items_tipo',
        timestamps : false,
    }

    const ItemsTipo = sequelize.define(alias, cols, config);

    ItemsTipo.associate = function(models) {
        ItemsTipo.hasMany(models.Items, {
            foreignKey : 'id',
        });
    }

    return ItemsTipo;
};