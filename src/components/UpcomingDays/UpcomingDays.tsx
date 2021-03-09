import { Icon, IconNames } from '../Icon';
import { UpcomingDaysList } from './UpcomingDaysList';
import { UpcomingDaysNav } from './UpcomingDaysNav';
import './UpcomingDays.css';

export function UpcomingDays() {
  return (
    <div className="UpcomingDays">
      <h2>Upcoming days</h2>
      <div className="UpcomingDays-blocks">
        <UpcomingDaysList />
        <UpcomingDaysList />
      </div>
      <UpcomingDaysNav />
    </div>
  );
}
