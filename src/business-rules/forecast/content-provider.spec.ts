import httpClient, { ENDPOINTS } from '../../utils/httpClient';
import provider from './content-provider';

jest.mock('../../utils/httpClient');

describe('Forecast Content Provider', () => {
  const spy = jest.spyOn(httpClient, 'get');
  it('fetches a forecast by city name', async () => {
    spy.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          id: '1',
          city: {
            name: 'Hamburg',
          },
        },
      })
    );

    const response = await provider.fetchForecastByCityName('Hamburg');

    expect(spy).toHaveBeenCalledWith(`${ENDPOINTS.forecasts.root}/hamburg`);
    expect(response.id).toBe('1');
    expect(response.city.name).toBe('Hamburg');
  });
});
