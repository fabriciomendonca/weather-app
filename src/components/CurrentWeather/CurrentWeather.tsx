import { Icon, IconNames, IconSizes } from '../Icon';
import './CurrentWeather.css';

export function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <h2>Now</h2>
      <div className="CurrentWeather-info">
        <div className="CurrentWeather-temperature">
          <p>18º</p>
          <small>01.03.2001</small>
        </div>
        <div>
          <Icon name={IconNames.SUNNY} size={IconSizes.BIG} />
        </div>
      </div>
    </div>
  );
}
