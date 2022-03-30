
import './App.css';
import { Form } from './components/Form/Form';
import React, { useEffect, useRef, useState } from 'react';
import {AUTHORS} from './utils/constants';
import { MessageList } from "./components/messageList/messageList";
import {ChatList} from './components/ChatList/ChatList'



function App() {
  const [messages, setMessages] = useState([])
  const timeout = useRef;

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1] 
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "This is a message from a robot",
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  return (
    <div className='App'>
       <MessageList messages={messages} />
      <Form onSubmit={sendMessage} />
      <ChatList></ChatList>
    </div>
  );
}

export default App;
