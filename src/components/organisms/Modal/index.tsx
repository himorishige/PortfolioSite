import React, { useEffect } from 'react';
import { Button, Heading, Typography } from 'src/components/atoms';
import TagItem from 'src/components/atoms/TagItem';
import { Work } from 'src/types';
import styles from './index.module.scss';

export type Props = {
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  works: Work[];
  workId: string;
};

const Modal: React.VFC<Props> = (props) => {
  const { setIsOpen, works, workId } = props;

  const work = works.find((work) => work.id === workId);

  useEffect(() => {
    document.querySelector('body')?.classList.add('fixed-body');
    // iOS用
    // const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    // const body = document.body;
    // body.style.position = 'fixed';
    // body.style.top = `-${scrollY}`;

    return () => {
      document.querySelector('body')?.classList.remove('fixed-body');
      // iOS用
      // const body = document.body;
      // const scrollY = body.style.top;
      // body.style.position = '';
      // body.style.top = '';
      // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={(e) => setIsOpen(false)}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.heading}>
          <Heading primary size="large">
            {work?.title}
          </Heading>
        </div>
        <div className={styles.workImage}>
          <img src={work?.image} alt={work?.title} />
        </div>
        <div className={styles.tagList}>
          {work?.tag?.items.map((tag, index) => (
            <TagItem key={index} label={tag.name} bgColor={tag.bgColor} color={tag.color} />
          ))}
        </div>
        <div className={styles.description}>
          <Typography primary>{work?.body}</Typography>
        </div>
        <div className={styles.tableWrapper}>
          <dl className={styles.dl}>
            {work?.table?.items.map((item, index) => (
              <React.Fragment key={index}>
                <dt className={styles.dt}>{item.name}</dt>
                <dd className={styles.dd}>{item.body}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
        <div className={styles.closeButton}>
          <Button label="close" handleClick={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
