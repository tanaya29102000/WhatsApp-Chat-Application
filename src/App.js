import React, { useReducer } from 'react';
import ContactList from './components/ContactList';
import ChatWindow from './components/ChatWindow';
import { ChatContext, chatReducer, initialChatState } from './context/ChatContext';
import './styles/app.css';

const App = () => {
  const [state, dispatch] = useReducer(chatReducer, initialChatState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      <div className="app-container">
        <ContactList />
        <ChatWindow />
      </div>
    </ChatContext.Provider>
  );
};

export default App;
