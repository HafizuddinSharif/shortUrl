const express = require('express');

const connectDB = require('./config/db');

const urls = require('./routes/api/urls')
const cors = require('cors')

const OriginalUrl = require('./models/OriginalUrl')
const ShortUrl = require('./models/ShortUrl')
const Click = require('./models/Click')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect Database
connectDB();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/urls', urls)

const port = process.env.PORT || 8080;

app.get('/:id', async (req, res) => {

    const url = `http://localhost:8080/${req.params.id}`
    const response = await ShortUrl.findOne({url: url})

    console.log(response.originalUrl)

    const response2 = await OriginalUrl.findById(response.originalUrl.toString())

    console.log(response2.url)

    // console.log(response.originalUrl.toString())
    console.log(url)
    res.redirect(response2.url)

})

app.listen(port, () => console.log(`Server running on port ${port}`));
