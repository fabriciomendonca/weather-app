import { render } from '@testing-library/react';
import { CurrentWeather } from './CurrentWeather';

describe('<CurrentWeather />', () => {
  it('should render without crashing', () => {
    const comp = render(<CurrentWeather />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });
});
