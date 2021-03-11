import { Forecast, forecastFactory } from './data';
import { ForecastService } from './service';

export interface ForecastExposer {
  getForecastByCityName: (cityName: string) => Promise<Forecast | null>;
  setService: (service: ForecastService) => void;
}
const exposer = (): ForecastExposer => {
  let service: ForecastService;

  return {
    async getForecastByCityName(cityName: string): Promise<Forecast | null> {
      let response;

      try {
        response = await service.fetchForecastByCityName(cityName);
      } catch {
        return null;
      }

      // Rules for returning a null forecast
      if (
        !response ||
        Object.keys(response).length === 0 ||
        !response.days ||
        response.days.length < 1
      ) {
        return null;
      }

      return forecastFactory(response);
    },
    setService(provider: ForecastService): void {
      service = provider;
    },
  };
};

export default exposer();
