import { MouseEvent } from 'react';

export type Props = {
  children: string;
  color?: any;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = () => {
  return <button>Button</button>;
};

export default Button;
