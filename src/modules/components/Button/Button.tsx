import { ButtonProps } from './Button.types';
import './Button.css';

export const Button = (props: ButtonProps) => {
  const { text, color, size } = props;
  
  return (
    <button className={`${color} ${size}`}>{text}</button>
  );
}
