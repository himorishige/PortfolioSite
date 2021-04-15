import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { ContactForm } from 'src/types';
import styles from './index.module.scss';

export type Props = {
  placeholder?: string;
  label: Path<ContactForm>;
  register: UseFormRegister<ContactForm>;
  required: boolean;
  maxLength: number;
};

const TextArea: React.VFC<Props> = (props) => {
  const { placeholder = '', register, label, required, maxLength } = props;

  return (
    <div>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        {...register(label, { required, maxLength })}
      ></textarea>
    </div>
  );
};

export default TextArea;
