const mongoose = require('mongoose');

const OriginalUrlSchema = new mongoose.Schema({
  titleTag: {
    type: String,
    required: true,
  },
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