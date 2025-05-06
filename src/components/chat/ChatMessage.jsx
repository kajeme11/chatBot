import user from '../../images/user.png';
import bot from '../../images/bot.png';
import './ChatMessage.css';

// const ChatMessage = (props) => {
const ChatMessage = ({message, sender}) => {
    // console.log(props);
    // const message = props.message;
    // const sender = props.sender;
    // const {message, sender} = props;
    return (
        <div className='chat-message-container'>
            <div className={sender === 'bot' ? 'bot-message' : 'user-message'}>
                {/* if sender equals robot then ouput robot image */}
                {sender === 'bot' && 
                    <img className='message-profile' alt="Bot placeholder" src={bot} />}
                <div className='chat-text'>
                    {message}
                </div>
                {sender === 'user' && 
                    <img className='message-profile' alt="User placeholder" src={user} />}
            </div>
        </div>
        );
    }

export default ChatMessage;
