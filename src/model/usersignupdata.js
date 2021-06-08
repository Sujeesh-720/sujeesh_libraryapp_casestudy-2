
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.x73f5.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

    const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    name: String,
    phoneno: String,
    emailid:String,
    password: String
});

var usersignupdata = mongoose.model('usersignupdata',SignupSchema);

module.exports = usersignupdata;

