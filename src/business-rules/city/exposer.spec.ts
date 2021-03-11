import cityService from './content-provider';
import exposer from './exposer';

jest.mock('./content-provider');

describe('City Exposer', () => {
  beforeEach(() => {
    exposer.setService(cityService);
  });

  it('gets a list of cities', async () => {
    const cities = await exposer.getCities();

    expect(cities[0]).toEqual({
      id: '1',
      name: 'Hamburg',
      country: {
        id: '1',
        name: 'Germany',
        isoCode: 'mc',
        locale: 'en-mc',
      },
      coordinates: {
        lat: '123123.12',
        lon: '123123.12',
      },
    });
  });

  it('gets an empty list of cities if error when calling the server', async () => {
    const spy = jest.spyOn(cityService, 'fetchCities');

    spy.mockImplementationOnce(() => {
      throw new Error('');
    });

    const response = await exposer.getCities();

    expect(spy).toHaveBeenCalled();
    expect(response).toEqual([]);

    spy.mockClear();
  });

  it('gets a city', async () => {
    const city = await exposer.getCity('1');

    expect(city).toEqual({
      id: '1',
      name: 'Mock City',
      country: {
        id: '1',
        name: 'Mock Country',
        isoCode: 'mc',
        locale: 'en-mc',
      },
      coordinates: {
        lat: '123123.12',
        lon: '123123.12',
      },
    });
  });

  it('gets a null city if error when calling the server', async () => {
    const spy = jest.spyOn(cityService, 'fetchCity');

    spy.mockImplementationOnce(() => {
      throw new Error('');
    });

    const response = await exposer.getCity('1');

    expect(spy).toHaveBeenCalled();
    expect(response).toEqual(null);

    spy.mockClear();
  });
});
