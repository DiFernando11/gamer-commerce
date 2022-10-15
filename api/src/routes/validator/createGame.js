const { check } = require('express-validator');
const { validateResult } = require('../helper/validateHelper');

const validateRegister = [
	check('name').exists().not().isEmpty().isString(),
	check('description').exists().not().isEmpty(),
	check('released').exists().not().isEmpty().isDate(),
	check('image').exists().not().isEmpty().isURL(),
	check('requirements_min').isString(),
	check('price').isFloat(),
	check('genres').isArray(),
	(req, res, next) => {
		validateResult(req, res, next);
	},
];

module.exports = { validateRegister };
