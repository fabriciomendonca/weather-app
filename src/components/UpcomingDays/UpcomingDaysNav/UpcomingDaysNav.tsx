import { IconNames } from '../../Icon';
import { IconButton } from '../../IconButton';
import './UpcomingDaysNav.css';

export function UpcomingDaysNav() {
  return (
    <div className="UpcomingDaysNav">
      <IconButton iconName={IconNames.DIRECTION_LEFT} disabled />
      <IconButton iconName={IconNames.DIRECTION_RIGHT} />
    </div>
  );
}
