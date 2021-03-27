import { render } from '@testing-library/react';
import { CurrentWeather } from './CurrentWeather';

describe('<CurrentWeather />', () => {
  it('should render without crashing', () => {
    const comp = render(
      <CurrentWeather
        today={{
          timestamp: 123123123,
          weather: {
            temperatures: {
              average: {
                celsius: 10,
                fahrenheit: 50,
              },
            },
            condition: 'sunny',
          },
        }}
      />
    );

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });
});
