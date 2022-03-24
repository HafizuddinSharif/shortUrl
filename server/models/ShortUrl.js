const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ShortUrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
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

module.exports = ShortUrl = mongoose.model('ShortUrl', ShortUrlSchema);