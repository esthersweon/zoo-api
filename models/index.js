var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zoo-api');

var animalModel = require('./animal');

module.exports = {
    Animal: animalModel
}