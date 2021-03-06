import './App.css';
import { Logo } from './components/Logo';
import { TextField } from './components/TextField';

function App() {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <div className="App">
      <main className="App-main">
        <header className="App-header">
          <Logo />
        </header>
        <section className="App-content">
          <div className="App-search">
            <TextField
              placeholder="Type a city to check the weather"
              onChange={onChange}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
