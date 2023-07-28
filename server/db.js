const mongoose = require('mongoose');

// Replace 'auctiondb' with the name of your database
const dbName = 'auctiondb';

// Connect to the local MongoDB server running at default port 27017
mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports = db;
