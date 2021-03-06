import { render } from '@testing-library/react';
import { TextField } from './TextField';

describe('<TextField />', () => {
  it('should render a TextField', () => {
    const comp = render(
      <div>
        <TextField />
      </div>
    );

    const field = comp.queryByTestId('text-field');

    expect(field).not.toBeNull();
  });
});
