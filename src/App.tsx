import React, { useCallback, useEffect, useState } from 'react';
import Header from 'src/components/organisms/Header';
import { Contact, Modal, Portfolio, Profile, Skill } from './components/organisms';
import Loader from 'react-loader-spinner';

import { useFetchWorks } from 'src/hooks/useFetchWorks';
import { ErrorMessage } from './components/molecules';

const App: React.VFC = () => {
  const { fetchWorks, works, loading, error } = useFetchWorks();

  useEffect(() => {
    fetchWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // modal
  const [isOpen, setIsOpen] = useState(false);
  const [workId, setWorkId] = useState('');
  const modalHandler = useCallback((id: string) => {
    setWorkId(id);
    setIsOpen(true);
  }, []);

  // iOS用にモーダル背景のスクロールを止める場合の下準備
  // window.addEventListener('scroll', () => {
  //   document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  // });

  return (
    <>
      <Header />
      <Profile />
      <Skill />
      {error ? (
        <ErrorMessage />
      ) : loading ? (
        <div style={{ padding: '80px 0', margin: '0 auto', textAlign: 'center' }}>
          <Loader type="TailSpin" color="#1a2947" height={100} width={100} timeout={3000} />
        </div>
      ) : (
        <Portfolio works={works} handleClick={modalHandler} />
      )}
      <Contact />
      {isOpen && <Modal setIsOpen={setIsOpen} workId={workId} works={works} />}
    </>
  );
};

export default App;
