module.exports = (sequelize, dataTypes) => {
    let alias = 'AtaquesTipo';
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
        tableName : 'ataques_tipo',
        timestamps : false,
    }

    const AtaquesTipo = sequelize.define(alias, cols, config);

    AtaquesTipo.associate = function(models) {
        AtaquesTipo.hasOne(models.AtaquesTipo, {
            as : 'tipo_ataque',
            foreignKey : 'id',
        });
    };

    return AtaquesTipo
};