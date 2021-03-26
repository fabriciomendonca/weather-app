import format from 'date-fns/format';
import { ForecastDay } from '../../business-rules/forecast/data';
import { Icon, IconNames, IconSizes } from '../Icon';
import './CurrentWeather.css';

interface Props {
  today: ForecastDay;
}

export function CurrentWeather({ today }: Props) {
  return (
    <div className="CurrentWeather">
      <h2>Now</h2>
      <div className="CurrentWeather-info">
        <div className="CurrentWeather-temperature">
          <p>{`${today.weather.temperatures.current?.celsius}º`}</p>
          <small>{format(today.timestamp, 'dd.MM.yyyy')}</small>
        </div>
        <div>
          <Icon
            name={today.weather.condition as IconNames}
            size={IconSizes.BIG}
          />
        </div>
      </div>
    </div>
  );
}
