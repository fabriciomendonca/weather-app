import { render } from '@testing-library/react';
import { UpcomingDays } from './UpcomingDays';

describe('<UpcomingDays />', () => {
  it('should render without crashing', () => {
    const comp = render(<UpcomingDays />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });
});
