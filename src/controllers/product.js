'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product');

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


exports.geyById = async (req, res, next) => {
    try {
        const data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}

exports.getBySlug = async (req, res, next) => {
    try {
        const data = repository.getBySlug(slug);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}


exports.getByTags = async (req, res, next) => {
    try {
        const data = repository.getByTags(req.params.tag);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!'
        })
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

exports.put = async (req, res, next) => {
    try {
        await repository.put(req.params.id, req.body);
        req.status(200).send(data);
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        req.status(200).send(data);
    } catch (e) {
        req.status(400).send({
            message: 'Falha ao processar sua requisição!'
        });
    }
}

console.log('product Controller exportado com sucesso!');