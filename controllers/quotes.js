const Quote = require('../models/quote');

module.exports.index = async (req, res) => {
    const quotes = await Quote.find({}).populate('popupText');
    res.render('quotes/index', { quotes })
}

module.exports.renderNewForm = async(req, res) => {
	const quotes = await Quote.find({}).populate('popupText');
    res.render('quotes/new', { quotes });
}

module.exports.createQuote = async (req, res, next) => {
	const quotes = await Quote.find({}).populate('popupText');
    const quote = new Quote(req.body.quote);
    quote.author = req.user._id;
    await quote.save();
    console.log(quote);
    req.flash('success', 'Successfully made a new quote!');
	res.redirect('/quotes');
}

