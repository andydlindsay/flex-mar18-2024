const express = require('express');
const morgan = require('morgan'); // logger

const app = express();
const port = 8080;

// configuration
app.set('view engine', 'ejs');

const sports = {
  abc: {
    id: 'abc',
    name: 'tennis',
    division: 'amateur',
    durationInMins: 60,
    numOfPlayers: 2
  },
  def: {
    id: 'def',
    name: 'soccer',
    division: 'professional',
    durationInMins: 90,
    numOfPlayers: 22
  }
};

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates and populates req.body

// GET /sports
app.get('/sports', (req, res) => {
  const templateVars = {
    sports: sports,
  };

  res.render('sports', templateVars);
});

// GET /sports/new
app.get('/sports/new', (req, res) => {
  res.render('new-sport');
});

// POST /sports
app.post('/sports', (req, res) => {
  console.log(req.body); // form information that was sent to the server

  const id = Math.random().toString(36).slice(2, 5); // generate a random 3 char string

  const newSport = {
    id: id,
    name: req.body.name,
    division: req.body.division,
    numOfPlayers: Number(req.body.numOfPlayers),
  };

  sports[id] = newSport;
  console.log(sports);

  res.redirect('/sports'); // make a followup GET to /sports
});

// POST /sports/abc/delete
// POST /sports/def/delete
// POST /sports/:sportId/delete
app.post('/sports/:sportId/delete', (req, res) => {
  const sportId = req.params.sportId;

  delete sports[sportId]; // delete sports.abc

  res.redirect('/sports');  
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
