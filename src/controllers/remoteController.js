const db = require('../database/models');

const remoteController = {

    show: (req, res) => {
        //res.json("Metodo para mostrar Remote por el ID");
        db.Remote.findByPk(req.params.id)
            .then((remote) => {
                if(remote) {
                    console.log(remote);
                    return res.status(200).json(remote.dataValues);
                }
                else {
                    console.log('No se encontró el remote en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró el remote en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    index: (req, res) => {
        //res.json("Metodo visualización de todos los Remotes");
        db.Remote.findAll()
        .then((allRemote) => {
            if(allRemote) {
                console.log(allRemote);
                return res.status(200).json(allRemote);
            }
            else {
                console.log('No se encontró ningún valor para remote en nuestra base de datos');
                return res.status(404).json({message: 'No se encontró ningún valor para remote en nuestra base de datos'});
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    }
}

module.exports = remoteController;