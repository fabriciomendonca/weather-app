import { Forecast } from '../data';

export default {
  fetchForecastByCityName(cityName: string): Promise<Forecast> {
    if (cityName === 'error') {
      throw new Error('');
    }

    return Promise.resolve({
      id: '1',
      city: {
        id: '1',
        name: cityName,
        country: {
          id: '1',
          name: 'Germany',
          isoCode: 'de',
          locale: 'de-de',
        },
        coordinates: {
          lat: '0',
          lon: '0',
        },
      },
      days: [
        {
          timestamp: 12345678,
          weather: {
            temperatures: {
              average: {
                celsius: 10,
                fahrenheit: 50,
              },
              current: {
                celsius: cityName === 'Berlin' ? 42 : 15,
                fahrenheit: 59,
              },
            },
            condition: 'sunny' as const,
          },
        },
        {
          timestamp: 123456123124214,
          weather: {
            temperatures: {
              average: {
                celsius: 10,
                fahrenheit: 50,
              },
            },
            condition: 'sunny' as const,
          },
        },
        {
          timestamp: 1234563213,
          weather: {
            temperatures: {
              average: {
                celsius: 10,
                fahrenheit: 50,
              },
            },
            condition: 'sunny' as const,
          },
        },
        {
          timestamp: 123456121,
          weather: {
            temperatures: {
              average: {
                celsius: 10,
                fahrenheit: 50,
              },
            },
            condition: 'sunny' as const,
          },
        },
        {
          timestamp: 1234562,
          weather: {
            temperatures: {
              average: {
                celsius: 10,
                fahrenheit: 50,
              },
            },
            condition: 'sunny' as const,
          },
        },
        {
          timestamp: 1234563,
          weather: {
            temperatures: {
              average: {
                celsius: 10,
                fahrenheit: 50,
              },
            },
            condition: 'sunny' as const,
          },
        },
      ],
    });
  },
};
