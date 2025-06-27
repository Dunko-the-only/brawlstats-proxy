require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PLAYER_TAG = 'U8RCLU2GP'; 
const app = express();
app.use(cors());

const PORT = 3000;
const API_URL = 'https://api.brawlstars.com/v1';

app.get('', async (req, res) => {
  try {
    const response = await axios.get(`https://api.brawlstars.com/v1/players/%23${PLAYER_TAG}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app .listen(PORT, () => {
  console.log(`Server is running properly, congratulations!`);
});


const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${process.env.BRAWL_API_KEY}`,
  },
});




