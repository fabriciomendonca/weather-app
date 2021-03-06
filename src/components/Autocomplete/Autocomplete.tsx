import { Card } from '../Card';
import { TextField } from '../TextField';
import './Autocomplete.css';

export function Autocomplete() {
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <div className="Autocomplete">
      <div className="Autocomplete-search">
        <TextField
          placeholder="Type a city to check the weather"
          onChange={onChange}
        />
      </div>
      <div className="Autocomplete-result">
        <Card>
          <ul className="Autocomplete-result-list">
            <li data-testid="autocomplete-result-item">
              <button type="button" onClick={() => console.log('City click')}>
                New York
              </button>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
