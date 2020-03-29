const request = require( 'supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe ('ONG',() => {
    beforeEach(async () => {
        
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    
    afterAll( () => {
        connection.destroy();  
    });

    it('should be able to create a ong', async () =>{
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD TEST",
                email: "contato@apai.com.br",
                whatsapp: "13987654321",
                city: "Santos",
                uf: "SP"
              });
              
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});