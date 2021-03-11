import { Forecast } from './data';

export interface ForecastService {
  fetchForecastByCityName: (cityName: string) => Promise<Forecast>;
}
