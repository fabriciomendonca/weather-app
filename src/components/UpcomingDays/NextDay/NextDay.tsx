import format from 'date-fns/format';
import { ForecastDay } from '../../../business-rules/forecast/data';
import { WEEK_DAYS } from '../../../utils/date';
import { Icon, IconNames } from '../../Icon';
import './NextDay.css';

interface Props {
  day: ForecastDay;
}

export function NextDay({ day }: Props) {
  return (
    <>
      <span className="NextDay">
        <Icon name={day.weather.condition as IconNames} />
        <span>{WEEK_DAYS[day.dateObject?.getDay() as number]}</span>
      </span>
      <span className="NextDay-info">
        <span className="NextDay-date">
          {format(day.timestamp, 'dd.MM.yyyy')}
        </span>
        <span className="NextDay-temperature">{`${day.weather.temperatures.average.celsius}º`}</span>
      </span>
    </>
  );
}
