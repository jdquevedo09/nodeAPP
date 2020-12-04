const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', _ => console.log('database connected in', URI));

db.on('error', error => console.log(error));