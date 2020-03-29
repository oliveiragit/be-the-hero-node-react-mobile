const express =  require('express');

const validation = require('./middlewares/validation');

const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController =  require('./controller/profileController');
const sessionController = require('./controller/sessionController');

const routes = express.Router();

routes.get('/', (req,res)=> {
    return res.json({
        evento: 'Semana OmniStack 11',
        aluno: 'Bruno de Oliveira Silva',
        index: 'path /sessions',
    });
}
);

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', validation.postOngs , ongController.create);
routes.delete('/ongs', validation.deleteOngs, ongController.delete)
    
routes.get( '/incidents', validation.getIncidents, incidentController.index);
routes.post('/incidents', validation.postIncidents, incidentController.create);
routes.delete('/incidents/:id', validation.deleteIncidents, incidentController.delete);

routes.get('/profile', validation.getProfile, profileController.index);


module.exports = routes;