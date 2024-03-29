const mongoose = require('mongoose');
//const config = require('config');
// const db = config.get('db');
//const db = 'mongodb://localhost/easemytrip1'; //MY CODE
const db = require("../config/keys").mongoURI;

module.exports = function() {
  //mongoose.connect(db, {useNewUrlParser: true}) //MY CODE
  mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log(`Connected to MongoDB...`))
    .catch(err => console.error('Could not connect to mongodb...', err));
}