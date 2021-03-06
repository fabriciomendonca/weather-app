import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render without error', () => {
    const comp = render(<App />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });

  it('should render the logo', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('Weather Challenge')).not.toBeNull();
  });
});
