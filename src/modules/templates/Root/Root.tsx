import Button from '../../components/Button';
import './Root.css';

export const Root = () => {
  return (
    <>
      <h1>
        testing - {process.env.NODE_ENV} {process.env.APP_NAME}
      </h1>
      <Button text='Testing Button' color='blue' size='large' />
    </>
  );
};
