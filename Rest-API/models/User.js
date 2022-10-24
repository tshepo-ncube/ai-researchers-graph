const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    

});



module.exports = mongoose.model('Users', userSchema);       //We created a model and gave it a name and the schema to use