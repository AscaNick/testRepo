const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://ascanick.github.io/testRepo/data.json');
    console.log(response.data);
  } catch (error) {
    console.error('Errore durante il fetch dei dati:', error);
  }
}

fetchData();