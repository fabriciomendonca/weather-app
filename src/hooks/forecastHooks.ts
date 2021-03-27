import { useEffect, useState } from 'react';
import { City } from '../business-rules/city/data';
import service from '../business-rules/forecast/content-provider';
import exposer from '../business-rules/forecast/exposer';
import { Forecast } from '../business-rules/forecast/data';

export const useGetForecast = (
  city: City | undefined
): { forecast: Forecast | null } => {
  const [forecast, setForecast] = useState<Forecast | null>(null);

  useEffect(() => {
    exposer.setService(service);
    if (!city) {
      return;
    }

    const getForecast = async (): Promise<void> => {
      const response = await exposer.getForecastByCityName(
        city.name.toLowerCase()
      );

      setForecast(response);
    };

    getForecast();
  }, [city]);

  return { forecast };
};
