import * as React from 'react';
import { Card } from '../Card';
import { TextField } from '../TextField';
import './Autocomplete.css';

export interface AutocompleteItem {
  id: string;
  displayText: string;
}

interface AutocompleteProps {
  items: AutocompleteItem[];
  searchFunction: (query: string) => void;
  onItemSelected: (item: AutocompleteItem & unknown) => void;
}

export function Autocomplete({
  items,
  searchFunction,
  onItemSelected,
}: AutocompleteProps) {
  const [inputValue, setInputValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState<AutocompleteItem>();
  const [list, setList] = React.useState<AutocompleteItem[]>([]);

  React.useEffect(() => {
    setList(items);
  }, [items]);

  React.useEffect(() => {
    if (selectedItem) {
      setList([]);
      setInputValue(selectedItem.displayText);
    }
  }, [selectedItem]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    setInputValue(query);
    searchFunction(query);
  };

  const onItemClick = (item: AutocompleteItem) => {
    setSelectedItem(item);
    onItemSelected(item);
  };

  return (
    <div className="Autocomplete">
      <div className="Autocomplete-search">
        <TextField
          placeholder="Type a city to check the weather"
          onChange={onChange}
          value={inputValue}
        />
      </div>
      {list.length > 0 && (
        <div className="Autocomplete-result">
          <Card>
            <ul className="Autocomplete-result-list">
              {list.map((item) => (
                <li data-testid="autocomplete-result-item" key={item.id}>
                  <button type="button" onClick={() => onItemClick(item)}>
                    {item.displayText}
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
}
