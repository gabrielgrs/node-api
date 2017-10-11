'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

// Chama as controllers
router.get('/', controller.get);
router.get('/admin/:id', controller.geyById);
router.get('/:slug', controller.getBySlug);
router.get('/tags/:tag', controller.getByTags)
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);


module.exports = router;
console.log('Product Router exportado com sucesso!');