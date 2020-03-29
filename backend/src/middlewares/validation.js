const {celebrate, Joi, Segments} = require('celebrate');

module.exports = validation ={
    
    postOngs: 
      celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                whatsapp: Joi.string().required().min(10).max(11),
                city: Joi.string().required(),
                uf: Joi.string().length(2),
            }),
        }),

    postIncidents: 
        celebrate({
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                description: Joi.string().required().min(5),
                value: Joi.number().positive().required()
            }),
            [Segments.HEADERS]: Joi.object().keys({
                authorization: Joi.string().required()
            }).unknown()
        })
    ,

    getIncidents: 
        celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number().positive()
            })
        })
    ,

    getProfile:
        celebrate({
            [Segments.HEADERS]: Joi.object().keys({
                authorization: Joi.string().required()
            }).unknown()
        })
    ,

    deleteOngs:
        celebrate({ 
            [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required()
            }),
            [Segments.HEADERS]: Joi.object().keys({
                authorization: Joi.string().required()
            }).unknown()
        }),

    deleteIncidents:
        celebrate({
            [Segments.HEADERS]: Joi.object().keys({
                authorization: Joi.string().required()
            }).unknown(),
            
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required().positive().integer()
            })
        })
}