import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import './TextBox.css';
const TextBox = ({chatMessages, setChatMessages}) => {

    const [inputText, setInputText] = useState('');

    const chatMessagesRef = useRef(null);
    
    useEffect(() => {
        console.log(chatMessagesRef.current);
        const container = chatMessagesRef.current;
        console.log(container.scrollTop);
        console.log(container.scrollHeight);
        if(container){
            container.scrollTop = container.scrollHeight;
        }
    }, [chatMessages]);

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
        <div className="chat-input-container" >
            <div className="chats-section" ref={chatMessagesRef}>
                {chats}
            </div>
            
            <input 
                className="input-box"
                onChange={processMessage} 
                value={inputText}
                placeholder="Ask me anything" 
                size="30" 
                />
            <button className="send-button" onClick={sendMessage}>Send</button>
        </div>
    );

}

export default TextBox;