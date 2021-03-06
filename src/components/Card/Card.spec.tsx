import { render } from '@testing-library/react';
import { Card } from './Card';

describe('<Card />', () => {
  it('should render a Card with children', () => {
    const { queryByText } = render(
      <Card>
        <p>This is a card</p>
      </Card>
    );

    expect(queryByText('This is a card')).not.toBeNull();
  });
});
