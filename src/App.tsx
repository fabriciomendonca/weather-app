import * as React from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Autocomplete, AutocompleteItem } from './components/Autocomplete';
import { Icon } from './components/Icon';
import { IconNames } from './components/Icon/IconFiles';

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
          <div className="App-now">
            <h2>Now</h2>
            <div className="App-now-info">
              <div className="App-now-temperature">
                <p>18º</p>
                <small>01.03.2001</small>
              </div>
              <div className="App-now-icon">
                <Icon name={IconNames.SUNNY} />
              </div>
            </div>
          </div>
          <div className="App-upcoming-days">
            <h2>Upcoming days</h2>
            <div className="App-upcomming-days-list">
              <ul className="App-next-days">
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">34º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
              </ul>
              <ul className="App-next-days">
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">34º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
                <li>
                  <span className="App-next-day">
                    <Icon name={IconNames.SUNNY} />
                    <span>Tuesday</span>
                  </span>
                  <span className="App-next-day-date-temperature">
                    <span className="App-next-day-date">02.03.2021</span>
                    <span className="App-next-day-temperature">4º</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="App-upcoming-days-nav">
              <button type="button" className="IconButton" disabled>
                <Icon name={IconNames.DIRECTION_LEFT} />
              </button>
              <button type="button" className="IconButton">
                <Icon name={IconNames.DIRECTION_RIGHT} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
