import user from '../../images/user.png';
import bot from '../../images/bot.png';

// const ChatMessage = (props) => {
const ChatMessage = ({message, sender}) => {
    // console.log(props);
    // const message = props.message;
    // const sender = props.sender;
    // const {message, sender} = props;

    if(sender === "chatBot"){
        return (
            <div>
                <div>
                <img alt="user placeholder" src={bot} width="50"/>
                {message}
            </div>
            </div>
        )
    }
    else{
        return (
            <div>
                {message}
                <img alt="user placeholder" src={user} width="50"/>
            </div>
        );
    }
}

export default ChatMessage;
