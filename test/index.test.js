import request from 'supertest';
import server from '../src'

describe('App startup', () => {

  it('app reference is valid', () => {
    expect(server).to.exist();
  });

  it('requests for root returns Hello World', async() => {

    let response = await request(server).get('/');
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Hello World');

  });

})
