const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension)

module.exports.quoteSchema = Joi.object({
    quote: Joi.object({
        gallons: Joi.number().required().min(0),
		 TotalAmountDue: Joi.string().required().escapeHTML(),
        SuggestedPrice: Joi.string().required().min(0),
        date: Joi.string().required().escapeHTML()
    }).required(),
    deleteImages: Joi.array()
});
