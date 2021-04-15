import React from 'react';
import styles from './index.module.scss';

export type Props = {
  src: string;
  alt?: string;
  className?: string;
};

const profileImage = '/assets/images/profile.jpg';

const ProfileIcon: React.VFC<Props> = (props) => {
  const { src = profileImage, alt = '', className = 'img' } = props;

  return (
    <div className={styles.wrapper}>
      <img className={className} src={src} alt={alt} />
    </div>
  );
};

export default ProfileIcon;
