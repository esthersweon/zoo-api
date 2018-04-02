var db = require('../models/index.js');

function index (req, res) {
    // res.send('you made it to the api/animals endpoint');
    db.Animal.find({}, function(err, allMyAnimals) {
        if (err) {
            console.log(err);
        }
        res.json(allMyAnimals);
    })
}

// function show() {}

// function create() {}

// function update() {}

// function destroy() {}

module.exports = {
    index: index
}