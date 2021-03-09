import { Icon, IconNames } from '../Icon';
import './IconButton.css';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: IconNames;
}

export function IconButton({ iconName, ...props }: IconButtonProps) {
  return (
    <button {...props} type="button" className="IconButton">
      <Icon name={iconName} />
    </button>
  );
}
