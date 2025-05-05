import ChatMessage from "./ChatMessage";
const TextBox = () => {

    return (
        <>
            <input placeholder="Ask me anything" size="30" />
            <button>Send</button>
            <ChatMessage message="Hello ChatBot" sender="user" />
            <ChatMessage message="Hello How can i help you today" sender="chatBot" />
            <ChatMessage message="What is the date" sender="user" />
            <ChatMessage message="Today is blah blah blah" sender="chatBot" />

        </>
    );

}

export default TextBox;