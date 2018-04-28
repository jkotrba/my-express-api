import request from 'supertest';
import server from '../src'

describe('coffee routes', () => {

  it('/coffee gives me coffee', async () => {
    const response = await request(server).get('/coffee');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('French Roast');
  })

  it('/coffee returns an error when asking for tea', async () => {
    const response = await request(server).get('/coffee?kind=tea');
    expect(response.status).to.equal(400);
    expect(response.text).to.equal('I\'m a coffee pot');
  })
})
