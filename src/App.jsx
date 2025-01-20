import{ useState } from 'react';
import ChatbotIcon from './components/ChatbotIcon';
import ChatMessage from './components/ChatForm';
import ChatMessage from './components/ChatMessage';
const App = () => {
  const[chatHistory, setChatHistory] = useState([]);

  const generationBotResponse = async(history) => {
    const updateHistory = (text) => {
      setChatHistory([...prev. filter(msg => msg.text !== "Thinkng..."), {role: 'model', text}]);
    }
      // Format the chat history for the API
    history = history.map(({role, text}) => ({role, parts:[]}));
    const requestOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({contents: history})
  }
  try {
    const response = await fetch(import.meta.env.VITF_API_URL, requestOption);
    const data = await response.json();
    if(!response.ok) throw new Error(data.message || 'An error occurred');
   
    const apiResponeText = data.candidates[0].content.parts[0].text.replace(/<[^>]*>/g, ''); // remove html tags
    trim();
    updateHistory(apiResponeText);
  } catch (error) {
    console.log(error);
    

    }
  } 

  return (
    <div className="container">
      <div className="chatbot-popup">
        
        {/* chatbot header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon/>
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        {/* chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <p className="message-text">Hello! How can I help you today?</p>
            </div>
            {/* render the chat history dynamically */}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat}/>
            ))}
            <div className="message user-message">
              <p className="message-text">I need help with my order</p>
            </div>

            {/* chatbot footer */}
            <div className="chat-footer">
              <ChatForm setChatHistory={chatHistory} setChathistory={setChatHistory} generationBotResponse={generationBotResponse}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;