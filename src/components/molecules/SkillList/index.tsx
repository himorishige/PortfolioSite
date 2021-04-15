import React from 'react';
import { SkillBox } from 'src/components/atoms';
import styles from './index.module.scss';

const index = () => {
  return (
    <div className={styles.wrapper}>
      <SkillBox src="/assets/images/mongo-db-logo@2x.png" />
      <SkillBox src="/assets/images/express-logo@2x.png" />
      <SkillBox src="/assets/images/react-logo@2x.png" />
      <SkillBox src="/assets/images/nodejs-logo@2x.png" />
    </div>
  );
};

export default index;
