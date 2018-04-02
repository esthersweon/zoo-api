var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/zoo-api');

var animalModel = require('./animal');

module.exports = {
    Animal: animalModel
}