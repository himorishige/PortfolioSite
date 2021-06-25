import React from 'react';
import styles from './index.module.scss';
import { ReactComponent as GithubIcon } from 'src/assets/githubIcon.svg';
import { ReactComponent as TwitterIcon } from 'src/assets/twitterIcon.svg';
import { ReactComponent as ZennIcon } from 'src/assets/zenn.svg';

const SnsIcons: React.VFC = () => {
  return (
    <div className={styles.snsIcons}>
      <a href="https://github.com/himorishige" className={styles.iconLink}>
        <GithubIcon />
      </a>
      <a href="https://twitter.com/_himorishige" className={styles.iconLink}>
        <TwitterIcon />
      </a>
      <a href="https://zenn.dev/himorishige" className={styles.iconLink}>
        <ZennIcon />
      </a>
    </div>
  );
};

export default SnsIcons;
