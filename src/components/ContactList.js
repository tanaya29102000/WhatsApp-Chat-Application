import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const ContactList = () => {
  const { state, dispatch } = useContext(ChatContext);

  const handleContactClick = (contact) => {
    dispatch({ type: 'SET_SELECTED_CONTACT', payload: contact });
  };

  return (
    <div className="contact-list">
      {state.contacts.map((contact) => (
        <div
          key={contact.id}
          className={`contact-item ${state.selectedContact === contact.id ? 'active' : ''}`}
          onClick={() => handleContactClick(contact.id)}
        >
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
