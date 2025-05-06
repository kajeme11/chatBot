import { useState } from "react";
import ChatMessage from "./ChatMessage";
import './TextBox.css';
const TextBox = ({chatMessages, setChatMessages}) => {

    const [inputText, setInputText] = useState('');


    function processMessage(event){
        // console.log(event.target.value);
        setInputText(event.target.value)
    }

    function sendMessage(){  
        const newMessage = [
            ...chatMessages, 
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
            ];
        setChatMessages(newMessage);

        //message from bot
        const botResponse = "How can i help?";

        setChatMessages([...newMessage, {
            message: botResponse,
            sender: 'bot',
            id: crypto.randomUUID()
        }]);

        console.log(chatMessages);
        setInputText('');
    }

    const chats = chatMessages.map(
        m => <ChatMessage key={m.id} message={m.message} sender={m.sender}/>)

    return (
        <div className="chat-input-container">
            <input 
                className="input-box"
                onChange={processMessage} 
                value={inputText}
                placeholder="Ask me anything" 
                size="30" 
                />
            <button className="send-button" onClick={sendMessage}>Send</button>
            {chats}
        </div>
    );

}

export default TextBox;