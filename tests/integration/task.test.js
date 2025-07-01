const request = require('supertest');
const app = require('../../backend/server.js');

let token;

beforeAll(async () => {
  const res = await request(app)
    .post('/api/auth/login')
    .send({
      email: 'admin@test.com',
      password: 'password'
    });

  token = res.body.token;
});

describe('Tests intégration Task', () => {
  let taskId;

  it('Créer une nouvelle tâche', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Nouvelle tâche',
        description: 'Description de test',
        priority: 'high'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    taskId = res.body.id;
  });

  it('Récupérer toutes les tâches', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Mettre à jour une tâche', async () => {
    const res = await request(app)
      .put(`/api/tasks/${taskId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Tâche modifiée' });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Tâche modifiée');
  });

  it('Supprimer une tâche', async () => {
    const res = await request(app)
      .delete(`/api/tasks/${taskId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(204);
  });
});
