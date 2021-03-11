import forecastService from './content-provider';
import { Forecast } from './data';
import exposer from './exposer';

jest.mock('./content-provider');

describe('Forecast Exposer', () => {
  beforeEach(() => {
    exposer.setService(forecastService);
  });
  it('gets a forecast for a specified city', async () => {
    const response = (await exposer.getForecastByCityName(
      'Hamburg'
    )) as Forecast;

    expect(response).toBeDefined();
    expect(response.id).toBe('1');
    expect(response.city.name).toBe('Hamburg');
  });

  it('returns null if no forecast is found or there was an error on the server', async () => {
    const spy = jest.spyOn(forecastService, 'fetchForecastByCityName');

    // cast to any so we can mock null responses from the server
    spy.mockImplementationOnce(() => Promise.resolve(null as any));

    let response = await exposer.getForecastByCityName('Brasilia');

    expect(spy).toHaveBeenCalledWith('Brasilia');
    expect(response).toEqual(null);

    spy.mockImplementationOnce(() => {
      throw new Error('Server error');
    });

    response = await exposer.getForecastByCityName('Brasilia');

    expect(spy).toHaveBeenCalledWith('Brasilia');
    expect(response).toEqual(null);
  });
});
