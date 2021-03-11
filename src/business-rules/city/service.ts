import { City } from './data';

export interface CityService {
  fetchCity: (id: string) => Promise<City>;
  fetchCities: (query?: string) => Promise<City[]>;
}
