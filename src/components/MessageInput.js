import React, { useState, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const MessageInput = () => {
  const [text, setText] = useState('');
  const { state, dispatch } = useContext(ChatContext);

  const handleSendMessage = () => {
    if (!text.trim()) return;

    const newMessage = { text, sent: true };
    dispatch({ type: 'ADD_MESSAGE', payload: { contact: state.selectedContact, message: newMessage } });

    // Add InstantDB integration here for real-time storage
    setText('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
