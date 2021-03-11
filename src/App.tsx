import * as React from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Autocomplete, AutocompleteItem } from './components/Autocomplete';
import { CurrentWeather } from './components/CurrentWeather';
import { UpcomingDays } from './components/UpcomingDays';
import { useGetCitites } from './hooks/cityHooks';

function App() {
  const [query, setQuery] = React.useState('');
  const cities = useGetCitites(query);
  const searchCities = (newQuery: string) => {
    setQuery(newQuery);
  };

  const onCitySelected = (city: AutocompleteItem) => {
    console.log(city);
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
              onItemSelected={onCitySelected}
            />
          </div>
          <CurrentWeather />
          <UpcomingDays />
        </section>
      </main>
    </div>
  );
}

export default App;
