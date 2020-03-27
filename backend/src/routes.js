const express =  require('express');

const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController =  require('./controller/profileController');
const sessionController = require('./controller/sessionController');

const routes = express.Router();

routes.get('/', (req,res)=> {
    return res.json({
        evento: 'semana OmniStack 11',
        aluno: 'Gatito Hernandez'
    });
}
);

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);

routes.post('/ongs', ongController.create);
    
routes.get( '/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);


module.exports = routes;