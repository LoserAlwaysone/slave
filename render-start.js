const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Messenger bot is running!'));

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

function gracefulShutdown() {
  console.log('Received shutdown signal, closing server...');
  server.close(() => {
    console.log('Server closed, exiting process.');
    process.exit(0);
  });
}

// Listen for termination signals (important for clean shutdown on Render)
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

// Start your actual bot script
require('./index.js');  // update this if your main bot file is different
