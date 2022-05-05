const db = require('../database/models');

const scheduleController = {

    show: (req, res) => {
        //res.json("Metodo para mostrar Schedule por el ID");
        db.Schedule.findByPk(req.params.id)
            .then((schedule) => {
                if(schedule) {
                    console.log(schedule);
                    return res.status(200).json(schedule.dataValues);
                }
                else {
                    console.log('No se encontró el schedule en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró el schedule en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    index: (req, res) => {
        //res.json("Metodo visualización de todos los Schedules");
        db.Schedule.findAll()
        .then((allSchedule) => {
            if(allSchedule) {
                console.log(allSchedule);
                return res.status(200).json(allSchedule);
            }
            else {
                console.log('No se encontró ningún valor para schedule en nuestra base de datos');
                return res.status(404).json({message: 'No se encontró ningún valor para schedule en nuestra base de datos'});
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    }    
}

module.exports = scheduleController;