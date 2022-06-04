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

app.get('/api/:name', (request, response) => {
  const albumName = request.params.name.toLowerCase();
  console.log(albumName);
  if (data[albumName]) {
    response.json(data[albumName]);
  } else {
    response.json(data['final fantasy x']);
  }
});

// defines what port my app will be served on
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
