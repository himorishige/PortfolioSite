import React, { ReactNode } from 'react';
import styles from './index.module.scss';

export type Props = {
  children: ReactNode;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
};

const Heading: React.VFC<Props> = ({ children, primary = false, size = 'medium', ...props }) => {
  const mode = primary ? styles.typographyPrimary : styles.typographySecondary;
  return (
    <h2 className={[styles.typography, mode, styles[size]].join(' ')} {...props}>
      {children}
    </h2>
  );
};

export default Heading;
