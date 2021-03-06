import { render } from '@testing-library/react';
import { Logo } from './Logo';

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { queryByText } = render(<Logo />);

    expect(queryByText('Weather Challenge')).not.toBeNull();
  });
});
