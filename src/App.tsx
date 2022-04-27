import './styles.css';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  return (
    <>
      <h1>
        testing - {process.env.NODE_ENV} {process.env.APP_NAME}
      </h1>
      <ClickCounter />
    </>
  );
};
