'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
    const res = await Customer.find({
        active: true,
    }, '');
    return res;
}

exports.post = async (data) => {
    const customer = new Customer(data);
    await customer.save();
}