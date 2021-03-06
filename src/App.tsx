import './App.css';
import { Logo } from './components/Logo';
import { Autocomplete } from './components/Autocomplete';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <header className="App-header">
          <Logo />
        </header>
        <section className="App-content">
          <div className="App-search">
            <Autocomplete />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
