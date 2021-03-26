import { ForecastDay } from '../../../business-rules/forecast/data';
import { NextDay } from '../NextDay';
import './UpcomingDaysList.css';

interface Props {
  days: ForecastDay[];
}

export function UpcomingDaysList({ days }: Props) {
  return (
    <ul className="UpcomingDaysList">
      {days.map((day, index) => (
        <li key={`day-${index}`}>
          <NextDay day={day} />
        </li>
      ))}
    </ul>
  );
}
