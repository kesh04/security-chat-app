import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const style = {
  decryptContainer: `max-w-[728px] mx-auto text-center mt-10`,
  textarea: `w-full h-40 p-2 mb-4 border border-gray-300 rounded-md`,
  button: `bg-green-500 text-white px-4 py-2 rounded-md`,
  text:`text-white`
};

const DecryptPage = () => {
  const [encryptedData, setEncryptedData] = useState('');
  const [decryptedData, setDecryptedData] = useState('');

  const secretKey = 'BATAMANBATMANBATMAN';

  const handleDecrypt = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
      const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedData(decryptedMessage);
    } catch (error) {
      console.error('Decryption failed:', error);
      setDecryptedData('Decryption failed');
    }
  };

  return (
    <div className={style.decryptContainer}>
      <h2 className="pb-5 text-white text-4xl">Decryption Page</h2>
      <textarea
        className={style.textarea}
        placeholder="Paste encrypted data here"
        value={encryptedData}
        onChange={(e) => setEncryptedData(e.target.value)}
      />
      <button className={style.button} onClick={handleDecrypt}>
        Decrypt
      </button>
      {decryptedData && (
        <div className={style.text}>
          <h3 className='  p-2  '>Decrypted Data</h3>
          <p className='m-4 p-2  border-dotted border-2 border-gray-300 font-mono  text-2xl'> {decryptedData}</p>
        </div>
      )}
    </div>
  );
};

export default DecryptPage;
