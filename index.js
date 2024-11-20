const axios = require('axios');

async function fetchData(parametro) {
  try {
    const response = await axios.get(`https://ascanick.github.io/testRepo/data?param=${parametro}`);
    console.log(response.data);
  } catch (error) {
    console.error('Errore durante il fetch dei dati:', error);
  }
}

fetchData('12345'); 