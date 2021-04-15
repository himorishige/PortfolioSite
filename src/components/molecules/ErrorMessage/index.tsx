import React from 'react';
import { Typography } from 'src/components/atoms';
import styles from './index.module.scss';

const ErrorMessage: React.VFC = React.memo(() => {
  return (
    <div className={styles.wrapper}>
      <Typography primary size="large" align="center">
        エラーが発生したため表示ができませんでした。
      </Typography>
    </div>
  );
});

export default ErrorMessage;
