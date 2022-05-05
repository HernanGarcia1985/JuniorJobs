const db = require('../database/models');

const educationController = {
    
    show: (req, res) => {
        //res.json("Metodo para mostrar Education por el ID");
        db.Education.findByPk(req.params.id)
            .then((education) => {
                if(education) {
                    console.log(education);
                    return res.status(200).json(education.dataValues);
                }
                else {
                    console.log('No se encontró el education en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró el education en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },
    
    index: (req, res) => {
        //res.json("Metodo para mostrar todos los educations");

        db.Education.findAll()
            .then((allEducation) => {
                if(allEducation) {
                    console.log(allEducation);
                    return res.status(200).json(allEducation);
                }
                else {
                    console.log('No se encontró educations en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró educations en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    }
}

module.exports = educationController;