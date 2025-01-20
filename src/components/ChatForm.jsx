import React from "react";
const Chatbot = ({chatHistory, setChatbotHistory, generateResponse}) => {
    const inputRef = useRef();
  const handleFormSubmit = (event) => {
      event.preventDefault();
      const userMessage = inputRef.current.value.trim();
      if(!userMessage) return;
      inputRef.current.value = "";
      //  update chat history with the user message
      setChatbotHistory(history => [...history, {role: "user", text: userMessage}]);

      // Add a"Thinking..." placeholder to the chat history"
      setTimeout(() => setChatbotHistory((history) => [...history, {role: "user", text: "Thinkng..."}]), 600);
      
      //Call the function to generate a response
      generateBotResponse([...chathistory, {role: "user", text: userMessage}]);
  };
  return (
    <from action="#" className="chat-form" onSubmit = {handleFormSubmit}>
    <input type="text" placeholder="Type your message..." className="message-input" required/>
    <button className="material-symbols-rounded">arrow_upward</button>
    </from> 
  );
};

export default ChatForm;