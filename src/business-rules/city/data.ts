export interface Country {
  id?: string;
  name: string;
  isoCode: string;
  locale: string;
}

export interface LatLon {
  lat: string;
  lon: string;
}

export interface City {
  id?: string;
  name: string;
  country: Country;
  coordinates: LatLon;
}

const countryFactory = (data: Country): Country => {
  if (!data || Object.keys(data).length === 0) {
    throw new Error('Country object cannot be null or empty.');
  }

  if (!data.name || data.name === '') {
    throw new Error('Country name not provided.');
  }

  if (!data.isoCode || data.isoCode === '') {
    throw new Error('Country ISO code not provided.');
  }

  if (!data.locale || data.locale === '') {
    throw new Error('Country locale not provided.');
  }

  return {
    ...data,
  };
};

const latLonFactory = (data: LatLon): LatLon => {
  if (!data || Object.keys(data).length === 0) {
    throw new Error('Coordinates object cannot be null or empty.');
  }

  if (!data.lat || data.lat === '') {
    throw new Error('Latitude not provided.');
  }

  if (!data.lon || data.lon === '') {
    throw new Error('Longitude not provided.');
  }

  return {
    ...data,
  };
};

export const cityFactory = (data: City): City => {
  if (!data || Object.keys(data).length === 0) {
    throw new Error('City object cannot be null or empty.');
  }

  if (!data.name || data.name === '') {
    throw new Error('City name not provided.');
  }

  return {
    ...data,
    country: countryFactory(data.country),
    coordinates: latLonFactory(data.coordinates),
  };
};
