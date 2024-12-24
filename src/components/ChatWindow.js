import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const { state } = useContext(ChatContext);
  const messages = state.messages[state.selectedContact] || [];

  return (
    <div className="chat-window">
      <div className="chat-history">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
