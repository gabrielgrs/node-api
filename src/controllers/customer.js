'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const repository = require('../repositories/customer');

exports.get = async (req, res, next) => {
    try {
        const data = await repository.get()
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        req.status(201).send(data);
    } catch (e) {
        res.status(400).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}