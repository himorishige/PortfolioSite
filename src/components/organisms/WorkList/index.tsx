import React from 'react';
import { WorkItem } from 'src/components/molecules';
import styles from './index.module.scss';
import { Work } from 'src/types';

export type Props = {
  works: Work[];
  handleClick: (id: string) => void;
};

const WorkList: React.VFC<Props> = React.memo((props) => {
  const { works, handleClick } = props;

  return (
    <div className={styles.wrapper}>
      {works.map((work) => (
        <WorkItem
          key={work.id}
          title={work.title}
          id={work.id}
          image={work.image}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
});

export default WorkList;
