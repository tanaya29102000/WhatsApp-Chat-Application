import React from 'react';

const Message = ({ message }) => {
  return (
    <div className={`message ${message.sent ? 'sent' : 'received'}`}>
      {message.text}
    </div>
  );
};

export default Message;
