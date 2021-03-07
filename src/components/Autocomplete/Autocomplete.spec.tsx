import { render, fireEvent, waitFor } from '@testing-library/react';
import { Autocomplete } from './Autocomplete';

describe('<Autocomplete />', () => {
  it('should render without crashing', () => {
    const comp = render(
      <Autocomplete
        items={[]}
        searchFunction={() => null}
        onItemSelected={() => null}
      />
    );

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });

  it('should render a list of cities', () => {
    const { queryAllByTestId } = render(
      <Autocomplete
        items={[
          {
            id: '123',
            displayText: 'Item',
          },
        ]}
        searchFunction={() => null}
        onItemSelected={() => null}
      />
    );
    const items = queryAllByTestId('autocomplete-result-item');

    expect(items).not.toBeNull();
    expect(items.length).toBe(1);
  });

  it('should call the searchFunction when the query has more than 3 chars', async () => {
    const spy = jest.fn();
    const comp = render(
      <Autocomplete
        items={[]}
        searchFunction={spy}
        onItemSelected={() => null}
      />
    );
    const input = comp.getByTestId('text-field');

    await waitFor(() => fireEvent.change(input, { target: { value: 'Ne' } }));
    expect(spy).not.toHaveBeenCalled();
    await waitFor(() =>
      fireEvent.change(input, { target: { value: 'New Yor' } })
    );
    expect(spy).toHaveBeenCalledWith('New Yor');
  });

  it('should show results and select an item', async () => {
    const spy = jest.fn();
    const comp = render(
      <Autocomplete
        items={[
          {
            id: '1',
            displayText: 'Item text',
          },
        ]}
        searchFunction={() => null}
        onItemSelected={spy}
      />
    );

    const button = comp.getByText('Item text');

    fireEvent.click(button);

    expect(spy).toHaveBeenCalledWith({
      id: '1',
      displayText: 'Item text',
    });
  });
});
