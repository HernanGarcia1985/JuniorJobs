const db = require('../database/models');

const seniorityController = {

    show: (req, res) => {
        //res.json("Metodo para mostrar Seniority por el ID");
        db.Seniority.findByPk(req.params.id)
            .then((seniority) => {
                if(seniority) {
                    console.log(seniority);
                    return res.status(200).json(seniority.dataValues);
                }
                else {
                    console.log('No se encontró el seniority en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró el seniority en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },
    
    index: (req, res) => {
        //res.json("Metodo para mostrar todos los seniorities");

        db.Seniority.findAll()
            .then((allSeniority) => {
                if(allSeniority) {
                    console.log(allSeniority);
                    return res.status(200).json(allSeniority);
                }
                else {
                    console.log('No se encontró seniorities en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró seniorities en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    }
}

module.exports = seniorityController;