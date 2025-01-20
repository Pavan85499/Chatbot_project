// import ChatbotIcon from './ChatbotIcon'

const ChatMessage = ({chat}) => {
    return (
        <div className={'message ${chat.role === "model" ? "bot" : "user"}-message'}>
            {chat.role === "mode" && <ChatbotIcon/>}
            <p className="message-text">{chat.text}</p>
        </div>
    );
    
}