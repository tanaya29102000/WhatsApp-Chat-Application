import React, { createContext } from 'react';

export const ChatContext = createContext();

export const initialChatState = {
  contacts: [],
  messages: {},
  selectedContact: null,
};

export const chatReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload };
    case 'SET_MESSAGES':
      return { ...state, messages: { ...state.messages, [action.payload.contact]: action.payload.messages } };
    case 'SET_SELECTED_CONTACT':
      return { ...state, selectedContact: action.payload };
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.contact]: [...(state.messages[action.payload.contact] || []), action.payload.message],
        },
      };
    default:
      return state;
  }
};
