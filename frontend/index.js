const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/data', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/api/data');
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao conectar com o backend Python:', error.message);
        res.status(500).json({ error: 'Erro ao conectar com o backend Python' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor frontend rodando na porta ${PORT}`);
});