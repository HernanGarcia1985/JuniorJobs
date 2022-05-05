const db = require('../database/models');


const experienceController = {
    show: (req, res) => {
        //res.json("Metodo para mostrar Education por el ID");
        db.Experience.findByPk(req.params.id)
            .then((experience) => {
                if(experience) {
                    console.log(experience);
                    return res.status(200).json(experience.dataValues);
                }
                else {
                    console.log('No se encontró el experience en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró el experience en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },
    
    index: (req, res) => {
        //res.json("Metodo para mostrar todos los educations");

        db.Experience.findAll()
            .then((allExperiences) => {
                if(allExperiences) {
                    console.log(allExperiences);
                    return res.status(200).json(allExperiences);
                }
                else {
                    console.log('No se encontró experiences en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró experiences en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    }
}

module.exports = experienceController