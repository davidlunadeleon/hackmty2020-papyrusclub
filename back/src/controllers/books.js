const Category = require('../models/category');
const categories = require('../../utils/categories');

const booksRouter = require('express').Router();
const fetch = require('node-fetch');

booksRouter.route('/categories').post(async (req, res) => {
	var categories_query = categories.categories_query;
	var categories_names = categories.categories_names;

	for (var i = 0; i < categories_query.length; i++) {
		await fetch(
			'https://www.googleapis.com/books/v1/volumes?printType=books&q=subject:' +
				categories_query[i]
		)
			.then((response) => {
				return response.json();
			})
			.then(async (resp) => {
				const category = new Category({
					name: categories_names[i],
					books: resp.items
				});

				await category.save();
			});
	}

	res.json({ success: 'All categories were saved!' });
});

//no funciona todavía
booksRouter.route('/categories/:category_name').get(async (req, res) => {
	var category = await Category.find({ name: req.params.category_name });
	if (category.length === 0) {
		return res.sendStatus(404);
	}
	res.json(category);
});

booksRouter.route('/categories').get(async (req, res) => {
	var category = await Category.find({});
	if (category.length === 0) {
		return res.sendStatus(404);
	}
	res.json(category);
});

module.exports = booksRouter;
