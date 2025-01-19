const App = () => {
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
            <div className="message user-message">
              <p className="message-text">I need help with my order</p>
            </div>

            {/* chatbot footer */}
            <div className="chat-footer">
              <from action="#" className="chat-form">
                <input type="text" placeholder="Type your message..." />
                <button className="material-symbols-rounded">keyboard_arrow_down</button>
              </from> 
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;