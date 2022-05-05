const db = require('../database/models');

const languageController = {

    create: (req, res) => {
        db.Language.findOne({where: {
            language: req.body.language
        }})
        .then((language) => {
            if(language) {
                console.log('message: Este language ya se encuentra registrado');
                return res.json({message: 'Este language ya se encuentra registrado'})
            } else {
                console.log(req.body)
                db.Language.create({
                    language: req.body.language
                })
                .then((language) => {
                    console.log("nuevo language creado")
                    res.json(language)
                })
                .catch((err) => {
                    console.log("No se pudo crear el language en la base de datos")
                })
            }
        })
        .catch((err) => {
            console.log(`Se ha producido el siguiente error: `, err)
        })
    },

    show: (req, res) => {
        //res.json("Metodo para mostrar Language por el ID");
        db.Language.findByPk(req.params.id)
            .then((language) => {
                if(language) {
                    console.log(language);
                    return res.status(200).json(language.dataValues);
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
        //res.json("Metodo para mostrar todos los languages");
        db.Language.findAll()
            .then((allLanguages) => {
                if(allLanguages) {
                    console.log(allLanguages)
                    return res.status(200).json(allLanguages)
                }else {
                    console.log('No se encontró ningún language en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró ningún language en nuestra base de datos'});
                }
            })
            .catch((error) => {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    }

}

module.exports = languageController