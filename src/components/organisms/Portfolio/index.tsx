import React from 'react';
import { Heading, Typography } from 'src/components/atoms';
import { WorkList } from 'src/components/organisms';
import styles from './index.module.scss';
import { Work } from 'src/types';

export type Props = {
  works: Work[];
  handleClick: (id: string) => void;
};

const Portfolio: React.VFC<Props> = (props) => {
  const { works, handleClick } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Heading primary size="large">
          PORTFOLIO
        </Heading>
      </div>
      <div className={styles.workList}>
        {works.length ? (
          <WorkList works={works} handleClick={handleClick} />
        ) : (
          <Typography primary align="center">
            作品の登録がありません。
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

Portfolio.displayName = 'Portfolio';
