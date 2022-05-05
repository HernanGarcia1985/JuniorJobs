const db = require('../database/models');

const specialityController = {
    show: (req, res) => {
        //res.json("Metodo para mostrar Education por el ID");
        db.Speciality.findByPk(req.params.id)
            .then((speciality) => {
                if(speciality) {
                    console.log(speciality);
                    return res.status(200).json(speciality.dataValues);
                }
                else {
                    console.log('No se encontró el speciality en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró el speciality en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },
    
    index: (req, res) => {
        //res.json("Metodo para mostrar todos los educations");
        db.Speciality.findAll()
            .then((allSpecialities) => {
                if(allSpecialities) {
                    console.log(allSpecialities);
                    return res.status(200).json(allSpecialities);
                }
                else {
                    console.log('No se encontró specialities en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró specialities en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    }
}

module.exports = specialityController