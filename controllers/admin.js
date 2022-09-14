const db = require('../database/models');
const { validationResult, body } = require("express-validator");
const sequelize = db.sequelize;

function getLastAttack (idAtacante) {
    let ataque =  db.HistorialAtaques.findOne({
        where: {
            id_atacante : idAtacante,
        },
        order: [ [ 'id', 'DESC' ]]
    });

    return Promise.all([ataque]).then(([ataque])=>{
        return ataque;
    });
};


module.exports = {
    addPlayer : (req,res) => {
        // Validamos que el middleware no nos devuelva ningun error
        let errors = validationResult(req);
        // Si tiene algun error se retorna un 403 (Forbidden : falta un dato) junto al error correspondiente
        if (!errors.isEmpty()) {
            return res.json({
                data: errors,
                status: 403,
            });
        }
        // Se crea el jugador con los datos enviados por el body de la peticion
        let jugador = db.Jugadores.create({
            nombre: req.body.nombre,
            email: req.body.email,
            id_tipo : req.body.id_tipo,
            vida : 100,
        }).then((jugador)=>{
            return jugador;
        });

        return Promise.all([jugador]).then(([jugador])=>{
            // Retornamos los datos del jugador creado
            return res.json({
                data : jugador,
                status : 200,
            });
        })
    },
    addItem : (req,res) => {
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({
                data: errors,
                status: 403,
            });
        }

        let item = db.Items.create({
            nombre: req.body.nombre,
            id_tipo: req.body.id_tipo,
            id_jugador: req.body.id_jugador,
            ataque: req.body.ataque,
            defensa: req.body.defensa,
        });

        return Promise.all([item]).then(([item])=>{
            return res.json({
                data : item,
                status : 200,
            });
        })
    },
    updateItem : (req,res) => {
        let itemUpdate = db.Items.update(req.body);

        return Promise.all([itemUpdate]).then(([itemUpdate])=>{
            return res.json({
                data : itemUpdate,
                status : 200,
            });
        })
    },
    getUltis : (req,res) => {
        let jugadores = db.Jugadores.findAll()

        return Promise.all([jugadores]).then(([jugadores])=>{
            let jugadoresUlti = jugadores.map((jugador)=>{
                let ultimoAtaque = getLastAttack(jugador.id);

                return Promise.all([ultimoAtaque]).then(([ultimoAtaque])=>{
                    console.log(ultimoAtaque.id_ataque);
                    if(ultimoAtaque.id_ataque === 1){
                        return jugador;
                    }
                })
            });
            console.log(jugadoresUlti);

            return Promise.all([jugadoresUlti]).then(([jugadoresUlti])=>{
                return res.json({
                    data : jugadoresUlti,
                    status:200,
                });
            });
        });
    },
}