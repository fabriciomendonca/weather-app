import { render } from '@testing-library/react';
import { UpcomingDaysNav } from './UpcomingDaysNav';

describe('<UpcomingDaysNav />', () => {
  it('should render without crashing', () => {
    const comp = render(
      <UpcomingDaysNav
        pagination={{
          currentPage: 1,
          totalItems: 10,
          totalPages: 2,
          itemsPerPage: 5,
        }}
        onPageChange={jest.fn()}
      />
    );

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });
});
