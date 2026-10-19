function loadChatbot(bot) {
    const chatbotContainer = document.getElementById('chatbot-container');

    switch (bot) {
        case 'microsoft':
            chatbotContainer.innerHTML = '<iframe src="chatbots/microsoft.html" width="100%" height="500px"></iframe>';
            break;
        case 'rasa':
            chatbotContainer.innerHTML = '<iframe src="chatbots/rasa.html" width="100%" height="500px"></iframe>';
            break;
        case 'dialogflow':
            chatbotContainer.innerHTML = '<iframe src="chatbots/dialogflow.html" width="100%" height="500px"></iframe>';
            break;
        case 'ibm':
            chatbotContainer.innerHTML = '<iframe src="chatbots/ibm.html" width="100%" height="500px"></iframe>';
            break;
        case 'witai':
            chatbotContainer.innerHTML = '<iframe src="chatbots/witai.html" width="100%" height="500px"></iframe>';
            break;
        default:
            chatbotContainer.innerHTML = 'Invalid chatbot selected!';
    }
}
