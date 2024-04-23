// Require mongoose library
const mongoose = require('mongoose');
//Connect to mongodb 
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

module.exports = mongoose.connection