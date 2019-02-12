module.exports = {
  mongoURI: "mongodb://irakli:irakli123@ecommerce-shard-00-00-pca9p.mongodb.net:27017,ecommerce-shard-00-01-pca9p.mongodb.net:27017,ecommerce-shard-00-02-pca9p.mongodb.net:27017/test?ssl=true&replicaSet=Ecommerce-shard-0&authSource=admin&retryWrites=true",
  secretOrKey: "secret"
};
// const mongoose = require('mongoose');

// const connect = (url) => mongoose.connect(url, {
//     useNewUrlParser: true
// })
// module.exports = connect;
