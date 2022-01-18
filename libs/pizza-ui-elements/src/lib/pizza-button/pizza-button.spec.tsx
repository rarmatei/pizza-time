import { render } from '@testing-library/react';

import PizzaButton from './pizza-button';

describe('PizzaButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PizzaButton />);
    expect(baseElement).toBeTruthy();
  });
});
