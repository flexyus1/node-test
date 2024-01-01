const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.get('/', (req,res) => {
  res.sendFile(`${basePath}/home.html`)
})

router.get('/teste',(req, res) => {
  res.sendFile(`${basePath}/teste.html`)
})

module.exports = router

