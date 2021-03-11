import { City } from './data';
import httpClient, { ENDPOINTS } from '../../utils/httpClient';
import { CityService } from './service';

const cityContentProvider: () => CityService = () => {
  return {
    async fetchCity(id: string): Promise<City> {
      const response = await httpClient.get(`${ENDPOINTS.cities.root}/${id}`);

      return response.data;
    },

    async fetchCities(query?: string): Promise<City[]> {
      const response = await httpClient.get(`${ENDPOINTS.cities.root}`, {
        params: {
          q: query,
        },
      });
      return response.data;
    },
  };
};

export default cityContentProvider();
