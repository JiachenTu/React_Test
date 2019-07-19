const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');

const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
var connect = process.env.MONGODB_URI;
mongoose.connect(connect);

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!');
});
