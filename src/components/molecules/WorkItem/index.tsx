import React from 'react';
import { Button, Typography } from 'src/components/atoms';
import styles from './index.module.scss';
import { Work } from 'src/types';

export type Props = Pick<Work, 'id' | 'title' | 'image'> & {
  handleClick: (id: string) => void;
};

const WorkItem: React.VFC<Props> = ({ title, id, image, handleClick }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), center / cover no-repeat url(${image})`,
      }}
    >
      <div className={styles.title}>
        <Typography align="center" size="large">
          {title}
        </Typography>
      </div>
      {id && (
        <div className={styles.viewButton}>
          <Button primary label="View More" handleClick={() => handleClick(id)} />
        </div>
      )}
    </div>
  );
};

export default WorkItem;
