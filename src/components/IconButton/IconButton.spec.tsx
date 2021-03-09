import { render } from '@testing-library/react';
import { IconButton } from './IconButton';
import { IconNames } from '../Icon';

describe('<IconButton />', () => {
  it('should render without crashing', () => {
    const comp = render(<IconButton iconName={IconNames.HAIL} />);

    expect(comp.container.childElementCount).toBeGreaterThan(0);
  });
});
