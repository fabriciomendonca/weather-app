import { render } from '@testing-library/react';
import { NextDay } from './NextDay';

describe('<NextDay />', () => {
  it('should render without crashing', () => {
    const comp = render(<NextDay />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });
});
