import React, { useState, useRef } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const SendMessage = () => {
  const [message, setMessage] = useState('');
  const scroll = useRef();

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('enter valid message');
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage('');
    scroll.current.sccrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form className="send-message" onSubmit={(event) => sendMessage(event)}>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
