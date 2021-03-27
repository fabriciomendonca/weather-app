import { render } from '@testing-library/react';
import { NextDay } from './NextDay';

describe('<NextDay />', () => {
  it('should render without crashing', () => {
    const comp = render(
      <NextDay
        day={{
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
