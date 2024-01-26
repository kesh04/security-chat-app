import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import CryptoJS from 'crypto-js';

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('');

  const encryptMessage = (message) => {
    
    const secretKey = 'BATAMANBATMANBATMAN';
    return CryptoJS.AES.encrypt(message, secretKey).toString();
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a valid message');
      return;
    }

    const { uid, displayName } = auth.currentUser;
    const encryptedMessage = encryptMessage(input);

    await addDoc(collection(db, 'messages'), {
      text: encryptedMessage,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });

    setInput('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Message'
      />
      <button className={style.button} type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
