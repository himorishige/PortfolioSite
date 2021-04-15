import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './index.module.scss';

const ErrorMessage: React.VFC = React.memo(() => {
  return (
    <div className={styles.wrapper}>
      <Loader type="TailSpin" color="#1a2947" height={100} width={100} timeout={5000} />
    </div>
  );
});

export default ErrorMessage;
