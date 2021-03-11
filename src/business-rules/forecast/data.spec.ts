import { forecastFactory } from './data';

describe('Forecast Data', () => {
  it('creates a forecast object for a city', () => {
    const object = {
      id: '1',
      city: {
        id: '1',
        name: 'Berlin',
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
          timestamp: Date.now(),
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
          timestamp: Date.now(),
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
    };
    const forecast = forecastFactory(object);

    expect(forecast).toBeDefined();
    expect(forecast.days).toHaveLength(2);
  });

  // TODO - Implement Forecast edge cases tests
});
