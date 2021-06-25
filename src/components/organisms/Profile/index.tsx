import React from 'react';
import { Heading, Typography } from 'src/components/atoms';
import styles from './index.module.scss';

const Profile: React.VFC = React.memo(() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Heading primary size="large">
          PROFILE
        </Heading>
      </div>
      <div className={styles.typography}>
        <Typography primary align="center">
          React、Next.jsを利用したフロントエンド開発を主戦場としています。
          <br />
          FULL STUCKしないFULL STACKなエンジニアを目標に日々邁進中です。
        </Typography>
      </div>
    </div>
  );
});

export default Profile;

Profile.displayName = 'Profile';
