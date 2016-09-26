var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});
//sent info to database collection pets
var User = mongoose.model('Heroes', userSchema);
module.exports = User;
