import { City } from '../city/data';

export interface ForecastTemperature {
  celsius: number;
  fahrenheit: number;
}
export interface ForecastWeather {
  temperatures: {
    average: ForecastTemperature;
    min?: ForecastTemperature;
    max?: ForecastTemperature;
    current?: ForecastTemperature;
  };
  condition: 'sunny' | 'showers' | 'hail' | 'raindrops';
}
export interface ForecastDay {
  timestamp: number;
  weather: ForecastWeather;
  dateObject?: Date;
}

export interface Forecast {
  id?: string;
  city: City;
  days: ForecastDay[];
}

const temperatureFactory = (
  data: ForecastTemperature | undefined
): ForecastTemperature | undefined => {
  if (!data) {
    return undefined;
  }

  return {
    ...data,
  };
};

const weatherFactory = (data: ForecastWeather): ForecastWeather => {
  return {
    ...data,
    temperatures: {
      average: temperatureFactory(
        data.temperatures.average
      ) as ForecastTemperature,
      min: temperatureFactory(data.temperatures.min),
      max: temperatureFactory(data.temperatures.max),
      current: temperatureFactory(data.temperatures.current),
    },
  };
};

const dayFactory = (data: ForecastDay): ForecastDay => {
  return {
    ...data,
    weather: weatherFactory(data.weather),
    dateObject: new Date(data.timestamp),
  };
};

export const forecastFactory = (data: Forecast): Forecast => {
  return {
    ...data,
    days: data.days.map(dayFactory),
  };
};
