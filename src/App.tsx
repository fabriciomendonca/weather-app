import * as React from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Autocomplete, AutocompleteItem } from './components/Autocomplete';
import { CurrentWeather } from './components/CurrentWeather';
import { UpcomingDays } from './components/UpcomingDays';
import { useGetCities } from './hooks/cityHooks';
import { useGetForecast } from './hooks/forecastHooks';
import { City } from './business-rules/city/data';
import { getThemeNameByTemperature, THEME_NAMES } from './utils/theme';

const AppMain: React.FC<{ theme: string }> = ({ children, theme }) => {
  return <div className="App-main">{children}</div>;
};

function App() {
  const [query, setQuery] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState<City>();
  const [theme, setTheme] = React.useState(THEME_NAMES.INITIAL);
  const cities = useGetCities(query);
  const { forecast } = useGetForecast(selectedCity);
  const [previousClass, setPreviousClass] = React.useState('');
  const [bgClasses, setBgClasses] = React.useState('');
  const [isAnimatingBg, setIsAnimatingBg] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const searchCities = (newQuery: string) => {
    setQuery(newQuery);
  };

  React.useEffect(() => {
    if (forecast && forecast.days[0].weather.temperatures.current) {
      const themeName = getThemeNameByTemperature(
        forecast.days[0].weather.temperatures.current.celsius
      );

      setIsLoading(false);
      setIsAnimatingBg(true);
      setBgClasses(`--${themeName}`);
      setTheme(themeName);
    }
  }, [forecast]);

  React.useEffect(() => {
    if (isLoading) {
      setPreviousClass(`--${theme}-loading`);
    }
  }, [isLoading, theme]);

  const onTransitionEnd = React.useCallback(() => {
    if (isAnimatingBg) {
      setIsAnimatingBg(false);
      setPreviousClass('');
    }
  }, [isAnimatingBg]);

  const onCitySelected = (city: AutocompleteItem & City) => {
    setSelectedCity(city);
    setQuery('');
    setIsLoading(true);
  };

  return (
    <div
      className={`App ${previousClass} ${bgClasses} ${
        isLoading ? '--loading' : ''
      }`.trim()}
      onTransitionEnd={() => (isAnimatingBg ? onTransitionEnd() : null)}
    >
      <AppMain theme={theme}>
        <header className="App-header">
          <Logo />
        </header>
        <section className="App-content">
          <div className="App-search">
            <Autocomplete
              items={(cities || []).map(
                (c): AutocompleteItem => ({
                  ...c,
                  id: c.id || Date.now().toString(),
                  displayText: c.name,
                })
              )}
              searchFunction={searchCities}
              onItemSelected={onCitySelected as any}
            />
          </div>
          {forecast ? (
            <>
              <CurrentWeather today={forecast.days[0]} />
              <UpcomingDays days={forecast.days.slice(1)} />
            </>
          ) : (
            <div>Loading forecast data</div>
          )}
        </section>
      </AppMain>
    </div>
  );
}

export default App;
