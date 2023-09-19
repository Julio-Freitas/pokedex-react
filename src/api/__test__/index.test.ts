import axios from 'axios';
import { requester } from '../requester';
import MockAdapter from 'axios-mock-adapter';

// Mock Axios instance
const mockAxios = new MockAdapter(axios);

describe('Requester.ts', () => {
  afterEach(() => {
    mockAxios.reset();
  });
  it('should make a GET request', async () => {
    mockAxios.onGet('/api/data').reply(200, { data: 'Sample data' });

    const response = await requester({ baseURL: '/api' }).get('/data');

    expect(response.status).toBe(200);
    expect(response.data).toEqual({ data: 'Sample data' });
  });

  it('should make a POST request', async () => {
    mockAxios
      .onPost('/api/data', { key: 'value' })
      .reply(201, { message: 'Created' });

    const response = await requester({ baseURL: '/api' }).post('/data', {
      key: 'value',
    });

    expect(response.status).toBe(201);
    expect(response.data).toEqual({ message: 'Created' });
  });
});
