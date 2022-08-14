import { render, screen, fireEvent } from '@testing-library/react';

import Reversal from '../reversal/index';

describe('Initial Page View Checks', () => {
  test('check Reversal renders', () => {
    render(<Reversal />);

    // check Reversal is in the Doc and is a H1
    const title = screen.getByText('Reversal');
    expect(title).toBeInTheDocument();
  });
});

describe('Anagram functions tests', () => {
  test('anagrams function exists', () => {
    expect(typeof anagrams).toEqual('function');
  });
});
