const connection = require('../database/connection');

const crypto = require('crypto');

const ongController = {
    
    index: async (req,res) => {
        const ongs = await connection.select('*').from('ongs');

        return res.json(ongs);
    },

     create: async (req, res) => {
        const {name, email, whatsapp, city, uf} = req.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return res.json({id});
    },
    delete: async (req, res) =>{
        const {id} = req.body;
        try{
            await connection('ongs').where('id', id).delete();
            return res.status(201).send();
        }catch(e){
            return res.status(400).json({erro: 'delete fails'})
        }
    }
}

module.exports = ongController;
