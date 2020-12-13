const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
require('dotenv').config()

app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

const amazon = require('./src/amazon')
const ebay = require('./src/ebay')

const port = process.env.PORT || 4040


app.get('/:search', async (req, res) => {
    // get parameter from url
    let search = req.params.search
    // making urls dynamic
    let url_amazon = `https://www.amazon.com/s?k=${search}`
    let url_ebay = `https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=${search}&_sacat=0`

    let products_amazon = await amazon(url_amazon)
    let products_ebay = await ebay(url_ebay)

    empty = {
        name: 'there is not this product or app did not scrap properly',
        price: '0',
        url: '',
        img: ''
    }

    // processing null data or error
    if (products_amazon === null) {
        products_amazon = [empty]
    }

    if (products_ebay === null) {
        products_ebay = [empty]
    }

    // send all scraping data to client
    res.send({
        amazon: products_amazon,
        ebay: products_ebay
    })
})


app.listen(port, () => {
    console.log(`server runs on ${port}`)
})