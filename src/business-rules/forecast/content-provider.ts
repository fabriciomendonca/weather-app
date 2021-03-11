import httpClient, { ENDPOINTS } from '../../utils/httpClient';
import { Forecast } from './data';
import { ForecastService } from './service';

const forecastService = (): ForecastService => {
  return {
    async fetchForecastByCityName(cityName: string): Promise<Forecast> {
      const response = await httpClient.get(
        `${ENDPOINTS.forecasts.root}/${cityName.toLocaleLowerCase()}`
      );

      return response.data;
    },
  };
};

export default forecastService();
