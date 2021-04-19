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
        <Typography primary>
          TypeScriptを利用したReactをベースに、フロントエンドの技術にとどまらずデータベースやawsを用いたバックエンドの構築技術を勉強中です。
          <br />
          業務ではプロジェクトの進行管理、オフショアや外部パートナーのエンジニアとの連携対応を行ってきました。そのためプロジェクトに必要な技術、要件について状況を広く理解し、様々なプロジェクトに柔軟に対応することができます。
          <br />
          FULL STUCKしないFULL STACKなエンジニアを目標に日々邁進中です。
        </Typography>
      </div>
    </div>
  );
});

export default Profile;

Profile.displayName = 'Profile';
