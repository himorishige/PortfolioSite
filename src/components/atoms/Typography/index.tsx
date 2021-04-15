import React, { ReactNode } from 'react';
import styles from './index.module.scss';

export type Props = {
  children: ReactNode;
  primary?: boolean;
  align?: 'left' | 'center' | 'right';
  size?: 'small' | 'medium' | 'large';
};

const Typography: React.VFC<Props> = ({
  children,
  primary = false,
  size = 'medium',
  align = 'left',
  ...props
}) => {
  const mode = primary ? styles.typographyPrimary : styles.typographySecondary;
  return (
    <p className={[styles.typography, mode, styles[size], styles[align]].join(' ')} {...props}>
      {children}
    </p>
  );
};

export default Typography;
