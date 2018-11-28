const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/myapp");

autoIncrement.initialize(connection);

const schema = new Schema({
    per_name: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

schema.plugin(autoIncrement.plugin, {model:'Permission',startAt: 100,incrementBy: 1});

module.exports = mongoose.model('Permission', schema);
