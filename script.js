document.addEventListener("DOMContentLoaded", function() 
{
    var chatDisplay = document.getElementById("chat-display");
    var userInput = document.getElementById("user-input");
    var sendBtn = document.getElementById("send-btn");
  
    sendBtn.addEventListener("click", function() 
    {
      var userMessage = userInput.value;
      displayMessage(userMessage, "user");
      userInput.value = "";
  
      setTimeout(function() 
      {
        var aiMessage = getAIResponse(userMessage);
        displayMessage(aiMessage, "ai");
      }, 500);
    });
  
    function displayMessage(message, sender) 
    {
      var messageContainer = document.createElement("div");
      var messageText = document.createElement("p");
      messageText.innerText = message;
  
      if (sender === "user") 
      {
        messageContainer.className = "user-message";
      }
       else 
      {
        messageContainer.className = "ai-message";
      }
  
      messageContainer.appendChild(messageText);
      chatDisplay.appendChild(messageContainer);
  
      // Scroll to bottom of chat display
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
  
    function getAIResponse(userMessage) 
    {
      return "You said: " + userMessage;
    }
  });
  