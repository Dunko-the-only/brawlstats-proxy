require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const PLAYER_TAG = '%23U8RCLU2GP';
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_URL = 'https://api.brawlstars.com/v1';

app.get('/', async (req, res) => {
  try {
    console.log('Fetching data for player tag:', PLAYER_TAG);
    const response = await axios.get(`${API_URL}/players/${PLAYER_TAG}`, {
      headers: {
        Authorization: `Bearer ${process.env.BRAWL_API_KEY_}`
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error('Error fetching player data:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running properly on port ${PORT}, congratulations!`);
});





