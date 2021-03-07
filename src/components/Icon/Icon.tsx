import { IconsList, IconNames, IconSizes } from './IconFiles';
import './Icon.css';

interface IconProps {
  name: IconNames;
  size?: IconSizes;
}

export function Icon({ name, size }: IconProps) {
  const IconNode = IconsList[name];
  const sizeClass = size || IconSizes.NORMAL;
  return (
    <i data-testid="icon" className={`Icon Icon-${sizeClass}`}>
      <IconNode.Element />
    </i>
  );
}

export default Icon;
