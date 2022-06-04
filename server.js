const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const data = require('./soundtracks.json');
const PORT = 8000;

//stops cors errors from happening
app.use(cors());

// Serves my landing page
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/', (request, response) => {
  response.json(data);
});

app.get('/api/:name', (request, response) => {
  const albumName = request.params.name.toLowerCase();
  if (data[albumName]) {
    response.json(data[albumName]);
  } else {
    response.json(data['unknown']);
  }
});

app.get('/vgSoundtrackApi/style.css', (request, response) => {
  response.sendFile(__dirname + '/style.css');
});

app.get('/vgSoundtrackApi/main.js', (request, response) => {
  response.sendFile(__dirname + '/main.js');
});

// defines what port my app will be served on
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
