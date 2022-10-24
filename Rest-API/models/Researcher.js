const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    Surname: {
        type: String,
        required: true
    },
    initials: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    primary_field: {
        type: String,
        required: true
    },
    secondary_field: {
        type: String,
        required: true
    },
    specialisation: {
        type: String,
        required: true
    }

});

/*/User Schema
mongoose.Schema({
    username: String,
    password: String,
})*/

module.exports = mongoose.model('researchers', PostSchema);       //We created a model and gave it a name and the schema to use
