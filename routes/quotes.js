const express = require('express');
const router = express.Router();
const quotes = require('../controllers/quotes');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateQuote } = require('../middleware');


const Quote = require('../models/quote');

router.route('/')
    .get(catchAsync(quotes.index))
    .post(isLoggedIn, validateQuote, catchAsync(quotes.createQuote))


router.get('/new', isLoggedIn, quotes.renderNewForm)
   


module.exports = router;