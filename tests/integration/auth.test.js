const request = require('supertest');
const app = require('../../backend/server.js');

describe('Tests intégration Auth', () => {
  it('Inscrire un nouvel utilisateur', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        password: 'motdepasse',
        name: 'TestUser'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
    expect(res.body.user).toHaveProperty('email', 'test@example.com');
  });

  it('Refuser un email déjà utilisé', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        password: 'motdepasse',
        name: 'TestUser'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('Permettre la connexion avec le bon mot de passe', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'motdepasse'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });


  it('Rejette la connexion avec un mauvais mot de passe', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'mauvaismotdepasse'
      });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
