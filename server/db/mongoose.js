var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://corten:todo@ds163060.mlab.com:63060/todo-app');

module.exports = {mongoose};
