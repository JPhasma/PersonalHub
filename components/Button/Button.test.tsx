import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Test Cases', () => {
  it('Render check', () => {
    const onClick = jest.fn(); // mock Jest function
    render(<Button label={'Button Test'} onClick={onClick}></Button>);
  });

  it('Displays Button Text correctly', () => {
    const onClick = jest.fn(); // mock Jest function
    render(<Button label={'Button Test'} onClick={onClick}></Button>);

    const element = screen.getByRole('button');
    expect(element).toHaveTextContent('Button Test');
  });

  it('Has onClick Callback', () => {
    const onClick = jest.fn(); // mock Jest function
    render(<Button label={'Button Test'} onClick={onClick}></Button>);
  });
});
