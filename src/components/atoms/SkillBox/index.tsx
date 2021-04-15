import React from 'react';
import styles from './index.module.scss';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

export type Props = {
  src: string;
  alt?: string;
};

const sampleImage = '/assets/images/react-logo@2x.png';

const SkillBox: React.VFC<Props> = ({ src = sampleImage, alt = '' }) => {
  const [ref, inView] = useInView({
    rootMargin: '-150px 0px',
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView && (
        <div className="animate__animated animate__fadeInUp">
          <div className={styles.wrapper}>
            <img className={styles.skillImage} src={src} alt={alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillBox;
