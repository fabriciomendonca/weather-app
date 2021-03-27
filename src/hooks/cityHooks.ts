import * as React from 'react';
import exposer from '../business-rules/city/exposer';
import service from '../business-rules/city/content-provider';
import { City } from '../business-rules/city/data';

export const useGetCities = (query?: string): City[] => {
  exposer.setService(service);

  const [cities, setCities] = React.useState<City[]>([]);

  React.useEffect(() => {
    if (!query || query.length < 3) {
      return;
    }
    const intervalId = setTimeout(async () => {
      const response = await exposer.getCities(query);
      setCities(response);
    }, 300);

    return (): void => {
      clearTimeout(intervalId);
      setCities([]);
    };
  }, [query]);

  return cities;
};
