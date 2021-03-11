import httpClient from '../../utils/httpClient';
import provider from './content-provider';

jest.mock('../../utils/httpClient');

describe('City Content Provider', () => {
  const spy = jest.spyOn(httpClient, 'get');
  it('fetches a list of cities', () => {
    const resp = [
      {
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
      },
    ];

    spy.mockImplementationOnce(() => Promise.resolve(resp));

    provider.fetchCities();

    expect(spy).toHaveBeenCalled();

    spy.mockClear();
  });

  it('fetches a city', () => {
    const resp = {
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
    };
    spy.mockImplementationOnce(() => Promise.resolve(resp));

    provider.fetchCity('1');

    expect(spy).toHaveBeenCalled();

    spy.mockClear();
  });
});
