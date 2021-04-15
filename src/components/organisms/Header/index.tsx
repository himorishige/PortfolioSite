import React from 'react';
import { ProfileIcon } from 'src/components/atoms';
import styles from './index.module.scss';
import { ReactComponent as HiIcon } from 'src/assets/hiIcon.svg';
import { SnsIcons } from 'src/components/molecules';

const Header: React.VFC = React.memo(() => {
  return (
    <div className={styles.wrapper}>
      <div className={[styles['angle--bottom-right'], styles.kv].join(' ')}>
        <img src="/assets/images/profile-bg.jpg" alt="" />
      </div>
      <div className={styles.profile}>
        <ProfileIcon src="/assets/images/profile.jpg" alt="" className={styles.i} />
      </div>
      <div className={styles.iconWrapper}>
        <HiIcon className={styles.icon} />
      </div>
      <div className={styles.snsIcons}>
        <SnsIcons />
      </div>
    </div>
  );
});

export default Header;
