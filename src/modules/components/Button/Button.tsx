import { ButtonProps } from './Button.types';
import { ButtonContainer } from './Button.styled';

export const Button = (props: ButtonProps) => {
  const { text, color, size } = props;
  
  return (
    <ButtonContainer className={`${color} ${size}`}>
      {text}
    </ButtonContainer>
  );
}
