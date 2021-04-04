const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const cors=require('cors')

app.use(cors())//izin ke frontend apapun buat akses backend


const PORT = 'http://today.line.me/id/portaljson'
// app.use(bodyparser.json())//buat user kirim data ke server
// app.use(bodyparser.urlencoded({ extended: false }))//buat user kirim data ke server
// app.use(express.static('public'))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://today.line.me/id/portaljson');
    // res.header("Access-Control-Allow-Origin", "https://today.line.me/id/portaljson"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('/', function(req, res, next) {
    // Handle the get for this route
  });
  
  app.post('/', function(req, res, next) {
   // Handle the post for this route
  });
app.get('/',(req,res)=>{
    return res.send('<h1>Tes API</h1>')
})

// const {Routers}=require('./Routers')

// app.use('/api',Routers)



// app.listen(PORT, () => console.log('server jalan di ' + PORT))

// var express = require('express')
// var cors = require('cors')
// var app = express()

// app.use(cors())