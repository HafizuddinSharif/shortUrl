const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const OriginalUrl = require('../../models/OriginalUrl')
const ShortUrl = require('../../models/ShortUrl')
const Click = require('../../models/Click')

const randomstring = require('randomstring')

// @route GET api/test
router.get('/test', (req, res) => res.send('url route testing!'))

// @route
// @description get all shortUrls
router.get('/short', async (req, res) => {
    
    const response = await ShortUrl.find()
    res.send(response)
})

// @route
// @description get all originalUrls
router.get('/original', async (req, res) => {
    
    const response = await OriginalUrl.find()
    res.send(response)
})

router.get('/deleteAll', async (req, res) => {

    const response = await ShortUrl.deleteMany()
    res.send(response)
})

router.post('/short/add', (req, res) => {

    const randomString = randomstring.generate(5)

    const originalUrl = new OriginalUrl({
        url: req.body.url,
    })

    originalUrl.save(e => {
        if (e) return handleError(e)

        const shortUrl = new ShortUrl({
            title: req.body.title,
            url: `http://localhost:8080/${randomString}`,
            originalUrl: originalUrl._id
        })

        shortUrl.save( e => {
            if (e) return handleError(e)
        })
    })

    res.send("Successfully added")

})

module.exports = router