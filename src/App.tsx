import * as React from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Autocomplete, AutocompleteItem } from './components/Autocomplete';
import { CurrentWeather } from './components/CurrentWeather';
import { UpcomingDays } from './components/UpcomingDays';

interface City {
  id: string;
  name: string;
}

function App() {
  const [cities, setCities] = React.useState<(City & AutocompleteItem)[]>([]);

  const searchCities = (query: string) => {
    setCities([
      {
        id: '1',
        displayText: 'New York',
        name: 'New York',
      },
      {
        id: '2',
        displayText: 'New York 1',
        name: 'New York',
      },
      {
        id: '3',
        displayText: 'New York 2',
        name: 'New York',
      },
      {
        id: '4',
        displayText: 'New York 3',
        name: 'New York',
      },
      {
        id: '5',
        displayText: 'New York 4',
        name: 'New York',
      },
      {
        id: '6',
        displayText: 'New York 5',
        name: 'New York',
      },
    ]);
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
              items={cities}
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
