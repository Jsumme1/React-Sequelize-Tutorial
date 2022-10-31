const express = require('express');
const cors = require('cors');
// create an Express app
const app = express();
const db = require('./app/models');

var corsOptions = {
  origin: 'http://localhost:8081',
};

// db.sequelize.sync()
// .then(() => {
//   console.log("Synced db.");
// })
// .catch((err) => {
//   console.log("Failed to sync db: " + err.message);
// });

// for dev only - force true - drop existing tables and re-sync db
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

// app.use - create cors middlewares
app.use(cors(corsOptions));

// parse requets of content-type- application/json

app.use(express.json());

// parse requests of content-type -application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to julie application' });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}.');
});
