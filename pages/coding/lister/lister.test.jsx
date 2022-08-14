import { render, screen, fireEvent } from '@testing-library/react';

import Lister from '../lister/index';

test('check Lister renders', () => {
  render(<Lister />);
});
