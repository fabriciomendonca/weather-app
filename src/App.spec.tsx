import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render without error', () => {
    const comp = render(<App />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });

  it('should search, update and select an item from the autocomplete list', async () => {
    const comp = render(<App />);

    const input = comp.getByTestId('text-field');
    await waitFor(() => fireEvent.change(input, { target: { value: 'New' } }));

    const items = comp.queryAllByTestId('autocomplete-result-item');
    expect(items.length).toBe(6);

    const button = items[2].querySelector('button');

    fireEvent.click(button as any);
    expect(input).toHaveAttribute('value', 'New York 2');
  });
});
