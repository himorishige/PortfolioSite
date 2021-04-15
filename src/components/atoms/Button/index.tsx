import React from 'react';
import styles from './index.module.scss';

export type ButtonProps = {
  primary?: boolean;
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: () => void;
  disabled?: boolean;
};

const Button: React.VFC<ButtonProps> = ({
  primary = false,
  type = 'button',
  label,
  handleClick,
  disabled = false,
}) => {
  const mode = primary ? styles.buttonPrimary : styles.buttonSecondary;
  return (
    <button
      type={type}
      className={[styles.button, mode].join(' ')}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
