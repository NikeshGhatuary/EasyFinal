//const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
//const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');

const hotelSchema = new mongoose.Schema({
  hname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  address1: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  address2: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  pin: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 10
  },
  city: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  state: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  contact: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 14
  },
  altcontact: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 14
  },
  hphoto: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 255
  },
  pcontactname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  pcontact: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 14
  },
  pcontactemail: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  pcontactaddress: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  pcontactid: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  addressproof: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isAdmin: Boolean

});

// userSchema.methods.generateAuthToken = function(){
//   const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'));
//   return token;
// }
//const User = mongoose.model('User', userSchema);

//MY CODE
/*function validateUser(user) {
  const schema = {
    //name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required()
  };

  
  return Joi.validate(user, schema);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    if(err) return callback(err);
    callback(null, isMatch);
  });
}

module.exports.getUserByEmail = function(email, callback){
  const query = {email: email};
  User.findOne(query, callback);
}
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

*/
module.exports = Hotel = mongoose.model("hotels", hotelSchema);
//exports.User = User; 
//exports.validate = validateUser; //MY CODE