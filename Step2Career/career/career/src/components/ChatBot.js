// ChatbotUI.js

import React from 'react';
import './ChatBot.css';

const Chatbot = () => {
  return (
    <div className="chatbot-ui">
      <div className="chat-window">
        <div className="messages">
          {/* Example hardcoded messages */}
          <div className="message bot"><span>Hello! How can I help you today?</span></div>
          <div className="message user"><span>Can you tell me more about your services?</span></div>
        </div>
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
        />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
