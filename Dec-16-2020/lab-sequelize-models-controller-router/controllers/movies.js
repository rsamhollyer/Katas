const { Movie } = require("../models");
const { layout } = require("../utils");

const list = async (req, res) => {
	const movies = await Movie.findAll();
	res.render("movies/list", {
		...layout,
		locals: {
			movies,
		},
	});
};

const showForm = (req, res) => {
	res.render("movies/form", {
		...layout,
	});
};

const processForm = async (req, res) => {
	const { title, genre, rating } = req.body;
	let { year } = req.body;
	year = parseInt(year);
	const newMovie = await Movie.create({
		title,
		genre,
		year,
		rating,
	});
	res.redirect(req.baseUrl);
};

module.exports = {
	list,
	showForm,
	processForm,
};
