export default {
  fetchCities() {
    return Promise.resolve([
      {
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
      },
      {
        id: '1',
        name: 'Berlin',
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
      },
    ]);
  },
  fetchCity(id: string) {
    return Promise.resolve({
      id,
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
  },
};
