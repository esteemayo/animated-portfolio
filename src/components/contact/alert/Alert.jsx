import { useEffect } from 'react';
import './Alert.scss';

const Alert = ({ msg, type, hideAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      hideAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hideAlert]);

  return (
    <p role='alert' aria-live='polite' className={`alert alert-${type}`}>
      {msg}
    </p>
  );
};

export default Alert;
