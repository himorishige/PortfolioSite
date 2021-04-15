import React from 'react';
import styles from './index.module.scss';
import { ReactComponent as QiitaIcon } from 'src/assets/qiitaIcon.svg';
import { ReactComponent as GithubIcon } from 'src/assets/githubIcon.svg';
import { ReactComponent as TwitterIcon } from 'src/assets/twitterIcon.svg';

const SnsIcons: React.VFC = () => {
  return (
    <div className={styles.snsIcons}>
      <a href="https://github.com/himorishige" className={styles.iconLink}>
        <GithubIcon />
      </a>
      <a href="https://qiita.com/himorishige" className={styles.iconLink}>
        <QiitaIcon />
      </a>
      <a href="https://twitter.com/_himorishige" className={styles.iconLink}>
        <TwitterIcon />
      </a>
    </div>
  );
};

export default SnsIcons;
