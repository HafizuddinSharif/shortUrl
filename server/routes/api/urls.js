const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const OriginalUrl = require('../../models/OriginalUrl')
const ShortUrl = require('../../models/ShortUrl')
const Click = require('../../models/Click')

// @route GET api/test
router.get('/test', (req, res) => res.send('url route testing!'))

// @route
// @description get all shortUrls
router.get('/short', (req, res) => {
    ShortUrl.find()
    .then(shorts => res.json(shorts))
    .catch(err => res.statusCode)
})

router.get('/short/add', (req, res) => {

    const short = new ShortUrl({
        url: 'https://anotherlink:8080'
    })

    short.save( () => {

    })

    // ShortUrl.create({
    //     url: 'https://anotherlink:8080'
    // }, (err, small) => {
    //     if (err) return handleError(err)
    // })

    res.redirect('/urls/test')


})

module.exports = router