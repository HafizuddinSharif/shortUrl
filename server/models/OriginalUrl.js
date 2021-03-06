const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OriginalUrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  shortUrls: [{
      type: Schema.Types.ObjectId,
      ref: 'ShortUrl'
  }]
});

module.exports = Book = mongoose.model('OriginalUrl', OriginalUrlSchema);