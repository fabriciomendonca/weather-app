import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';
import { useGetCities } from './hooks/cityHooks';

const mockCities = [
  {
    id: '1',
    name: 'Berlin',
    country: {
      id: '1',
      name: 'Germany',
      isoCode: 'de',
      locale: 'de-de',
    },
    coordinates: {
      lat: '0',
      lon: '0',
    },
  },
  {
    id: '2',
    name: 'Hamburg',
    country: {
      id: '1',
      name: 'Germany',
      isoCode: 'de',
      locale: 'de-de',
    },
    coordinates: {
      lat: '1',
      lon: '1',
    },
  },
];

jest.mock('./hooks/cityHooks', () => {
  return {
    __esModule: true,
    useGetCities: jest.fn(),
    default: jest.fn(),
  };
});
describe('<App />', () => {
  it('should render without error', () => {
    const comp = render(<App />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });

  it('should search, update and select an item from the autocomplete list', async () => {
    (useGetCities as any).mockImplementation(() => mockCities);
    const comp = render(<App />);

    const input = comp.getByTestId('text-field');
    await waitFor(() => fireEvent.change(input, { target: { value: 'New' } }));

    const items = comp.queryAllByTestId('autocomplete-result-item');
    expect(items.length).toBe(2);

    const button = items[1].querySelector('button');

    fireEvent.click(button as any);
    expect(input).toHaveAttribute('value', 'Hamburg');
  });
});
