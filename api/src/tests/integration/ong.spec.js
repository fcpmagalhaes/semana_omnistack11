const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');


describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  }); 

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "ONG Teste",
        email: "teste@ong.com.br",
        whatsapp: "6199999999",
        city: "Brasília",
        uf: "DF"
      });
      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});