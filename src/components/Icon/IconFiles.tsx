import { ReactComponent as Error } from '../../assets/icons/error.svg';
import { ReactComponent as Sunny } from '../../assets/icons/sunny.svg';
import { ReactComponent as Hail } from '../../assets/icons/hail.svg';
import { ReactComponent as Showers } from '../../assets/icons/showers.svg';
import { ReactComponent as Raindrops } from '../../assets/icons/raindrops.svg';
import { ReactComponent as DirectionRight } from '../../assets/icons/direction-right.svg';
import { ReactComponent as DirectionLeft } from '../../assets/icons/direction-left.svg';

export enum IconNames {
  SUNNY = 'sunny',
  SHOWERS = 'showers',
  HAIL = 'hail',
  RAINDROPS = 'raindrops',
  DIRECTION_RIGHT = 'direction-right',
  DIRECTION_LEFT = 'direction-left',
  ERROR = 'error',
}

export enum IconSizes {
  BIG = 'big',
  NORMAL = 'normal',
}

export interface IconsListType {
  [key: string]: {
    Element: React.FunctionComponent;
  };
}

export const IconsList: IconsListType = {
  [IconNames.ERROR]: {
    Element: Error,
  },
  [IconNames.SUNNY]: {
    Element: Sunny,
  },
  [IconNames.HAIL]: {
    Element: Hail,
  },
  [IconNames.SHOWERS]: {
    Element: Showers,
  },
  [IconNames.RAINDROPS]: {
    Element: Raindrops,
  },
  [IconNames.DIRECTION_RIGHT]: {
    Element: DirectionRight,
  },
  [IconNames.DIRECTION_LEFT]: {
    Element: DirectionLeft,
  },
};
