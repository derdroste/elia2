const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://doadmin:t2z78Im65DYOR340@db-mongodb-fra1-78342-ce2070eb.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-fra1-78342', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB!', err));
