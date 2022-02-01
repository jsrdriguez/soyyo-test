require('../src/config')
const request = require('supertest');

const app = require("../src/app");

describe('Post endpoint filter entity', () => {
    
    test('Get all entities by range', async () => {
        const res = await request(app).post('/entities/filter').send({
            startId: 1,
            endId: 1
        })

        expect(res.statusCode).toEqual(200)
        expect(res.body.length).toEqual(1)
    });

    test('Not found entities by range', async () => {
        const res = await request(app).post('/entities/filter').send({
            startId: 20,
            endId: 20
        })
        
        expect(res.statusCode).toEqual(404)
    });

    test('Error Validation entities by range', async () => {
        const res = await request(app).post('/entities/filter').send({
            startId: 4,
            endId: 2
        })
        
        expect(res.statusCode).toEqual(400)
    });
    
  });