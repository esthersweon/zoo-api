var db = require('./models');

var allAnimalsIWantToCreate = [
    {
        name: 'Petunia', 
        species: 'dog',
        hasOffspring: true,
        age: 4
    }, {
        name: 'Carol', 
        species: 'cat',
        hasOffspring: false,
        age: 2
    }, {
        name: 'Mel', 
        species: 'frog',
        hasOffspring: true,
        age: 1
    }
]

db.Animal.remove({}, function(err, removedAnimals) {
    db.Animal.create(allAnimalsIWantToCreate, function (err, createdAnimals) {
        console.log("You created " + allAnimalsIWantToCreate.length + " animals");
        process.exit();
    });
})





