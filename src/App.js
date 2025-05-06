import { useState } from 'react';
import './App.css';
import TextBox from './components/chat/TextBox';

function App() {

  const [messages, setMessages] = useState(
      [
          {
              message: "Hello ChatBot",
              sender: "user",
              id: 1
          },
          {
              message: "Hello How can i help you today",
              sender: "bot",
              id: 2
          },
          {
              message: "What is the date",
              sender:"user",
              id: 3
          },
          {
              message: "Today is blah blah blah",
              sender: "bot",
              id: 4
          }
      ]
      );

  return (
    <div className="App">
      <TextBox 
        chatMessages={messages} 
        setChatMessages={setMessages} 
      />
    </div>
  );
}

export default App;
