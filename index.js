require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;
const API_URL = 'https://api.brawlstars.com/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${process.env.BRAWL_API_KEY}`,
  },
});

app.get('/player/:tag', async (req, res) => {
  const tag = req.params.tag.replace('#', '%23');
  try {
    const response = await api.get(`/players/${tag}`);
    res.json(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Erreur Brawl Stars API' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy Brawl Stars lancé sur http://localhost:${PORT}`);
});
