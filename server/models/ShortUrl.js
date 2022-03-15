const mongoose = require('mongoose');

const ShortUrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  clickInfos: [{
    type: Schema.Types.ObjectId,
    ref: 'Click'
  }],
  originalUrl: {
      type: Schema.Types.ObjectId,
      ref: 'OriginalUrl'
  }
});

module.exports = Book = mongoose.model('ShortUrl', ShortUrlSchema);