import { Icon, IconNames } from '../../Icon';
import './NextDay.css';

export function NextDay() {
  return (
    <>
      <span className="NextDay">
        <Icon name={IconNames.SUNNY} />
        <span>Tuesday</span>
      </span>
      <span className="NextDay-info">
        <span className="NextDay-date">02.03.2021</span>
        <span className="NextDay-temperature">4º</span>
      </span>
    </>
  );
}
