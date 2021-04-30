const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const QuoteSchema = new Schema({
	
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
	TotalAmountDue:{
		type: String
	},
	SuggestedPrice:{
		type: String
	},
	gallons:{
		type:Number
	},
	date:{
		type:String
	},
	count:
	{
		type: Number
	}
	
}, opts);


QuoteSchema.virtual('properties.popUpMarkup').get(function () {
    return `
    <strong><a href="/quotes/${this._id}">${this.title}</a><strong>
    <p>${this.description.substring(0, 20)}...</p>`
});



module.exports = mongoose.model('Quote', QuoteSchema);