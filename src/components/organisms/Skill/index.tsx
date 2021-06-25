import React from 'react';
import { Heading, Typography } from 'src/components/atoms';
import { SkillList } from 'src/components/molecules';
import styles from './index.module.scss';

const Skill: React.VFC = React.memo(() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Heading size="large">FULL STACK</Heading>
      </div>
      <div className={styles.typography}>
        <Typography align="center">
          MERNスタック（MongoDB・Express・React・Node.js）を用いたWebアプリケーションの構築。
          <br />
          aws環境または各種サーバーレスアーキテクチャを用いたフルスタック環境の構築。
        </Typography>
      </div>
      <div className={styles.skillSet}>
        <SkillList />
      </div>
    </div>
  );
});

export default Skill;

Skill.displayName = 'Skill';
