import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Heading, Typography, Input, Button, TextArea } from 'src/components/atoms';
import styles from './index.module.scss';
import { SnsIcons } from 'src/components/molecules';

import { ContactForm } from 'src/types';

type PostData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.VFC = React.memo(() => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: PostData) => {
    const url = process.env.REACT_APP_MAIL_API_URL || '';
    const apiKey = process.env.REACT_APP_MAIL_API_KEY || '';
    const apiToken = process.env.REACT_APP_MAIL_API_TOKEN || '';

    setLoading(true);

    const sendMail = async (data: PostData) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...data, key: apiToken }),
        });

        if (!response.ok) {
          const error = await response.json();
          console.log(error);
          alert('送信に失敗しました。');
          return;
        }
        alert('お問合せありがとうございます！');
        reset();
      } catch (error) {
        console.log(error);
        alert('送信に失敗しました。');
      } finally {
        setLoading(false);
      }
    };
    sendMail(data);
  };

  const emailPattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

  return (
    <div
      className={[styles['angle--top-left'], styles.wrapper].join(' ')}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
    url(/assets/images/hazard.jpg) center / cover no-repeat`,
      }}
    >
      <div className={styles.heading}>
        <Heading size="large">CONTACT</Heading>
      </div>
      <div className={styles.typography}>
        <Typography align="center">こちらからお問合せください。</Typography>
      </div>
      <div className={styles.formArea}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formControl}>
            <Input
              type="text"
              placeholder="Name"
              label="name"
              register={register}
              required={true}
              maxLength={50}
            />
            {errors.name && <Typography>お名前を入力してください。</Typography>}
          </div>
          <div className={styles.formControl}>
            <Input
              type="email"
              placeholder="Email"
              label="email"
              register={register}
              required={true}
              pattern={emailPattern}
            />
            {errors.email && <Typography>Emailを入力してください。</Typography>}
          </div>
          <div className={styles.formControl}>
            <TextArea
              placeholder="Message"
              label="message"
              register={register}
              required={true}
              maxLength={400}
            />
            {errors.message && <Typography>メッセージを入力してください。</Typography>}
          </div>
          <div className={styles.formSubmit}>
            <Button primary label="submit" type="submit" disabled={loading} />
          </div>
        </form>
      </div>
      <div className={styles.iconWrapper}>
        <SnsIcons />
      </div>
      <Typography size="small" align="center">
        copyright 2021 Hi.Morishige All Rights Reserved.
      </Typography>
    </div>
  );
});

export default Contact;
