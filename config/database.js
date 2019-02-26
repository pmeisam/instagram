var mongoose = require('mongoose');
//'mongodb://localhost:27017/instagram'
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
.catch(function(err) {
  console.log(err)
})

// database connection event
mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;