import { NextDay } from '../NextDay';
import './UpcomingDaysList.css';

export function UpcomingDaysList() {
  return (
    <ul className="UpcomingDaysList">
      <li>
        <NextDay />
      </li>
      <li>
        <NextDay />
      </li>
      <li>
        <NextDay />
      </li>
      <li>
        <NextDay />
      </li>
      <li>
        <NextDay />
      </li>
      <li>
        <NextDay />
      </li>
    </ul>
  );
}
