import Button from '../../components/Button';
import { RootContainer } from './Root.styled';

export const Root = () => {
  return (
    <RootContainer>
      <h1> 
        testing - {process.env.NODE_ENV} {process.env.APP_NAME}
      </h1>
      <Button
        text='Testing Button'
        color='blue'
        size='large'
      />
    </RootContainer>
  );
};
