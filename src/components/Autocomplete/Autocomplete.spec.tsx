import { render } from '@testing-library/react';
import { Autocomplete } from './Autocomplete';

describe('<Autocomplete />', () => {
  it('should render without crashing', () => {
    const comp = render(<Autocomplete />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });

  it('should render a list of cities', () => {
    const { queryByTestId } = render(<Autocomplete />);
    const items = queryByTestId('autocomplete-result-item');

    expect(items).not.toBeNull();
    expect(items?.childElementCount).toBe(1);
  });
});
