import { render, screen } from '@testing-library/react';

import { Icon } from './Icon';
import { IconNames, IconSizes } from './IconFiles';

describe('Icon', () => {
  it('renders the Icon component', () => {
    render(<Icon name={IconNames.ERROR} />);

    const icon = screen.getByTestId('icon');

    expect(icon).toBeDefined();
  });

  it('renders a big Icon component', () => {
    render(<Icon name={IconNames.ERROR} size={IconSizes.BIG} />);

    const icon = screen.getByTestId('icon');

    expect(icon).toBeDefined();
  });
});
