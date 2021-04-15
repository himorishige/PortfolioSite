import React from 'react';
import { Path, UseFormRegister, ValidationRule } from 'react-hook-form';
import { ContactForm } from 'src/types';
import styles from './index.module.scss';

export type Props = {
  type: string;
  placeholder?: string;
  label: Path<ContactForm>;
  register: UseFormRegister<ContactForm>;
  required: boolean;
  maxLength?: number;
  pattern?: ValidationRule<RegExp> | undefined;
};

const Input: React.VFC<Props> = (props) => {
  const { type = 'text', placeholder = '', label, register, required, maxLength, pattern } = props;

  return (
    <>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...register(label, { required: required, maxLength: maxLength, pattern: pattern })}
      />
    </>
  );
};

export default Input;
