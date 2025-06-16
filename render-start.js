const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Messenger bot is running!'));

app.listen(PORT, () => {
  console.log(`Fake server listening on port ${PORT}`);
});

// Start your actual bot script
require('./index.js');  // change if your main bot file is named differently
