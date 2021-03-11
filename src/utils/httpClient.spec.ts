import httpClient from './httpClient';

describe('httpClient', () => {
  it('creates an axios instance', () => {
    expect(httpClient).toBeDefined();
    expect(httpClient.get).toBeDefined();
  });
});
