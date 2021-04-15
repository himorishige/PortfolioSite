import React from 'react';
import styles from './index.module.scss';

export type Props = {
  label: string;
  color?: string;
  bgColor?: string;
};

const TagItem: React.VFC<Props> = (props) => {
  const { label, color, bgColor } = props;

  return (
    <div className={styles.wrapper} style={{ color: color, backgroundColor: bgColor }}>
      {label}
    </div>
  );
};

export default TagItem;
