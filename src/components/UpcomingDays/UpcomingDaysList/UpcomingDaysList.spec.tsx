import { render } from '@testing-library/react';
import { UpcomingDaysList } from './UpcomingDaysList';

describe('<UpcomingDaysList />', () => {
  it('should render without crashing', () => {
    const comp = render(<UpcomingDaysList />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });
});
