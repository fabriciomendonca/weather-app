import * as React from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Autocomplete, AutocompleteItem } from './components/Autocomplete';
import { CurrentWeather } from './components/CurrentWeather';
import { UpcomingDays } from './components/UpcomingDays';
import { useGetCitites } from './hooks/cityHooks';
import { useGetForecast } from './hooks/forecastHooks';
import { City } from './business-rules/city/data';

function App() {
  const [query, setQuery] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState<City>();
  const cities = useGetCitites(query);
  const forecast = useGetForecast(selectedCity);
  const searchCities = (newQuery: string) => {
    setQuery(newQuery);
  };

  const onCitySelected = (city: AutocompleteItem & City) => {
    setSelectedCity(city);
    setQuery('');
  };

  return (
    <div className="App">
      <main className="App-main">
        <header className="App-header">
          <Logo />
        </header>
        <section className="App-content">
          <div className="App-search">
            <Autocomplete
              items={cities.map(
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
      </main>
    </div>
  );
}

export default App;
