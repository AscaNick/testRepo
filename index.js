const axios = require('axios');

async function fetchData(messageId) {
  try {
    const response = await axios.get('https://ascanick.github.io/testRepo/data.json');
    const data = response.data;

    const messages = data.messages;
    const users = data.users;

    const message = messages.find(msg => msg.id === messageId);
    if (message) {
      const user = users.find(user => user.name === message.user);
      if (user) {
        console.log(`${message.timestamp} - ${user.name} (${user.email}): ${message.message}`);
      }
    } else {
      console.log('Messaggio non trovato');
    }
  } catch (error) {
    console.error('Errore durante il fetch dei dati:', error);
  }
}