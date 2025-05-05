import user from '../../images/user.png';
import bot from '../../images/bot.png';

// const ChatMessage = (props) => {
const ChatMessage = ({message, sender}) => {
    // console.log(props);
    // const message = props.message;
    // const sender = props.sender;
    // const {message, sender} = props;

    
    return (
        <div>
            {/* if sender equals robot then ouput robot image */}
            {sender === 'robot' && <img alt="Bot placeholder" src={bot} width="50"/>}
            {message}
            {sender === 'user' && <img alt="User placeholder" src={user} width="50"/>}
        </div>
        );
    }
}

export default ChatMessage;
