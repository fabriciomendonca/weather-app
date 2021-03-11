/* eslint-disable @typescript-eslint/no-explicit-any */
import { cityFactory } from './data';

describe('City Data', () => {
  // Use any for setting props with null or undefined values
  // for testing factory errors
  let object: any;
  beforeEach(() => {
    object = {
      id: 'test',
      name: 'Test City',
      country: {
        id: 'test',
        name: 'Test Country',
        isoCode: 'tc',
        locale: 'en-us',
      },
      coordinates: {
        lat: '12212.12',
        lon: '332232.34',
      },
    };
  });

  it('creates a city object', () => {
    const city = cityFactory(object);

    expect(city).toBeDefined();
    expect(city.name).toEqual(object.name);
  });

  it('throws an error for a city object without enough information', () => {
    object.name = '';

    let error;
    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('City name not provided.');

    object.name = undefined;

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('City name not provided.');

    object = {};

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('City object cannot be null or empty.');

    object = undefined;

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('City object cannot be null or empty.');
  });

  it('throws an error for a city object without latitude and longitude information', () => {
    object.coordinates = {};
    let error;
    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('Coordinates object cannot be null or empty.');

    object.coordinates = undefined;

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('Coordinates object cannot be null or empty.');

    object.coordinates = {
      lat: '',
      lon: '1231231.121',
    };

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('Latitude not provided.');

    object.coordinates = {
      lat: '123123123.121',
      lon: '',
    };

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('Longitude not provided.');
  });

  it('throws an error for a city object without country information', () => {
    object.country = {};
    let error;

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('Country object cannot be null or empty.');

    object.country = undefined;

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('Country object cannot be null or empty.');

    object.country = {
      ...object.country,
      name: '',
    };

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('Country name not provided.');

    object.country = {
      ...object.country,
      name: 'Country',
      isoCode: '',
    };

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('Country ISO code not provided.');

    object.country = {
      ...object.country,
      name: 'Country',
      isoCode: 'tc',
      locale: '',
    };

    try {
      cityFactory(object);
    } catch (e) {
      error = e;
    }

    expect(error.message).toBe('Country locale not provided.');
  });
});
