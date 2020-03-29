const connection = require('../database/connection');

const generateUniqueId = require('../utils/generateUniqueId')

const ongController = {
    
    index: async (req,res) => {
        const ongs = await connection.select('*').from('ongs');

        return res.json(ongs);
    },

     create: async (req, res) => {
        const {name, email, whatsapp, city, uf} = req.body;
    
        const id = generateUniqueId();
        
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
        const {authorization} = req.headers;

        try{
            if(id != authorization){
                throw new Error('not have authorization');
            }

            const del = await connection('ongs').where('id',id).delete();

            if(del===0)
                return res.status(400).json({error: 'ong does\'t exist'});

            return res.status(201).send();

        }
        catch(err){
            const [erro] = String(err).split('at delete')
          
            return res.status(400).json({erro: 'delete fails',erro});
        }
    }
}

module.exports = ongController;
