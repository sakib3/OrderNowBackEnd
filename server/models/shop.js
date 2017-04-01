var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var childProductSchema = Schema({
    name: String,
    category: String,
    price: Number
});
var productSchema = Schema({
    name: String,
    category: String,
    price: Number,
    childProducts: [childProductSchema]
});
var shopSchema = Schema({
    name: String,
    products: [productSchema],
    address: String,
    location: {},
    phone: [String],
    shopType: String,
    cvcNumber: { type: String, unique: true, index: true },
    openingHours: [{
        day: String,
        time: String,
    }],
    notice: {
        message: String,
        startDate: Date,
        endDate: Date
    }
}, {
    timestamps: true
});

var Shop = module.exports = mongoose.model('Shop', shopSchema, 'shop');

module.exports.addProducts = function(products, callback) {
    Shop.create(products, callback);
};

module.exports.getProducts = function(callback, limit) {
    Shop.find(callback).limit(limit);
};