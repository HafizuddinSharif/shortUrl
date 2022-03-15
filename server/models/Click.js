const mongoose = require('mongoose');

const ClickSchema = new mongoose.Schema({
  shortUrl: {
    type: Schema.Types.ObjectId,
    ref: 'ShortUrl',
  },
  geolocation: {
    type: Geolocation,
    required: true
  },
  timestamp: {
      type: Date,
      default: Date.now(),
      required: true
  }
});

module.exports = Book = mongoose.model('Click', ClickSchema);