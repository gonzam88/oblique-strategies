const bodyParser = require('body-parser')
const app = require('express')()

const fs = require('fs');
var phrases = []

try {
  const data = fs.readFileSync('./strategies.txt', 'utf8');
  phrases = data.split("\n")
} catch (err) {
  console.error(err);
}


app.use(bodyParser.json())
app.all('/random', (req, res) => {
  const rand = Math.round(Math.random() * phrases.length)
  const phrase = phrases[rand]
  res.json({ phrase })
})

module.exports = app