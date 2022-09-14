const db = require('../database/models');
const { validationResult, body } = require("express-validator");
const sequelize = db.sequelize;

function getJugador(idJugador){
    return db.Jugador.findById(idJugador);
}

module.exports = {
    equipItem : (req, res)=>{
        //Buscamos el item que desea equiparse
        let item = db.Items.findOne({
            where:{
                nombre : req.body.nombre,
            }
        });

        //Buscamos si tiene un item del mismo tipo
        let itemEquipado = db.Items.findOne({
            where:{
                equipado : 1,
                id_tipo : item.id_tipo
            }
        });

        return Promise.all([item,itemEquipado]).then(([item,itemEquipado])=>{
            // Si tiene un item del mismo tipo se le desequipa
            if(itemEquipado){
                itemEquipado.equipado = 0;
                itemEquipado.save();
            }
            // Modifico el item que desea equiparse
            let itemModificado = db.Items.update({equipado : 1},{
              where: {
                nombre: req.params.id,
                equipado: 0,
              }
            });
            // Retornamos el item modificado
            return Promise.all([itemModificado]).then(([itemModificado])=>{
                return res.json({
                    data:itemModificado,
                    status:200,
                });
            });
        });
    },
    attack : (req, res)=>{
        let defensor = getJugador(req.body.id_defensor);

        let defensor = getJugador(req.body.id_atacante);

        let ataque = db.HistorialAtaques.create({
            id_atacante
        })

        return res.json({
            data: {},
            status : 200,
        });
    },
}