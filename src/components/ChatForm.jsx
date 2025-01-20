import React from "react";
const Chatbot = ({setChatbotHistory}) => {
    const inputRef = useRef();
  const handleFormSubmit = (event) => {
      event.preventDefault();
      const userMessage = inputRef.current.value.trim();
      if(!userMessage) return;
      inputRef.current.value = "";

      setChatbotHistory(history => [...history, {role: "user", text: userMessage}]);
  };
  return (
    <from action="#" className="chat-form" onSubmit = {handleFormSubmit}>
    <input type="text" placeholder="Type your message..." className="message-input" required/>
    <button className="material-symbols-rounded">arrow_upward</button>
    </from> 
  );
};

export default ChatForm;