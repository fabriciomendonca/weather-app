import { City, cityFactory } from './data';
import { CityService } from './service';

export interface CityExposer {
  getCity: (id: string) => Promise<City | null>;
  getCities: (query?: string) => Promise<City[]>;
  setService: (provider: CityService) => void;
}

const exposer: () => CityExposer = () => {
  let service: CityService;

  return {
    async getCity(id: string): Promise<City | null> {
      let response;
      try {
        response = await service.fetchCity(id);
      } catch {
        return null;
      }

      return cityFactory(response);
    },

    async getCities(query?: string): Promise<City[]> {
      let response;
      try {
        response = await service.fetchCities(query);
      } catch {
        return [];
      }

      return response.map((c) => cityFactory(c));
    },

    setService(provider: CityService): void {
      service = provider;
    },
  };
};

export default exposer();
