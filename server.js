// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:param", (req, res) => {
  const param = req.params.param
  const date = new Date('' + (+param) === param ? +param * 1000 : param)
  if (isNaN(date.valueOf())) return res.json({unix: null, natural: null})
  res.json({
    unix: date.valueOf() / 1000,
    natural: date.toLocaleDateString('en-EN', {year: 'numeric', month: 'long', day: 'numeric' })
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, 
  () => console.log('Your app is listening on port ' + listener.address().port)
)
