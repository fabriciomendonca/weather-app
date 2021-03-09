import { render } from '@testing-library/react';
import { UpcomingDaysNav } from './UpcomingDaysNav';

describe('<UpcomingDaysNav />', () => {
  it('should render without crashing', () => {
    const comp = render(<UpcomingDaysNav />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });
});
