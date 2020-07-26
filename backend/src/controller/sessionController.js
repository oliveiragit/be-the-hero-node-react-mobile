const connection = require('../database/connection');


module.exports = {
    async create(req,res){
        const {id} = req.body;

        const ong = await connection('ongs').where('id',id).select('*').first();

        if(!ong){
            return res.status(401).json({error: "ong doesn't exist"})
        }
        return res.json(ong.name);
    }
}
