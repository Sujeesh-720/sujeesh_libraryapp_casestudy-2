//access mongoose package
const mongoose = require('mongoose');
//database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.x73f5.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
//schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    knownas: String,
    birthplace:String,
    image: String
});

//model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;