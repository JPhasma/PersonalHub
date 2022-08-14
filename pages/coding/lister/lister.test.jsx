import { render, screen, fireEvent } from '@testing-library/react';

import Lister from '../lister/index';
const checker = 'check';

test('check Lister renders', () => {
  render(<Lister />);
});
