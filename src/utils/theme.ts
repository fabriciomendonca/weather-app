export enum THEME_NAMES {
  INITIAL = 'initial',
  ERROR = 'error',
  FREEZING = 'freezing',
  COLD = 'cold',
  COOL = 'cool',
  WARM = 'warm',
  HOT = 'hot',
  BURNING = 'burning',
}

export const getThemeNameByTemperature = (
  temperature: number,
  unit: 'C' | 'F' = 'C'
): THEME_NAMES => {
  const realTemperature =
    unit === 'C' ? temperature : ((temperature - 32) * 9) / 5;

  if (realTemperature <= 0) {
    return THEME_NAMES.FREEZING;
  }

  if (realTemperature > 0 && realTemperature <= 10) {
    return THEME_NAMES.COLD;
  }

  if (realTemperature > 10 && realTemperature <= 20) {
    return THEME_NAMES.COOL;
  }

  if (realTemperature > 20 && realTemperature <= 30) {
    return THEME_NAMES.WARM;
  }

  if (realTemperature > 30 && realTemperature <= 40) {
    return THEME_NAMES.HOT;
  }

  return THEME_NAMES.BURNING;
};

export interface WATheme {
  name: string;
  bg: string;
  filter?: string;
}
