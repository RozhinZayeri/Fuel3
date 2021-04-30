const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
	 camp: {
        type: Schema.Types.ObjectId,
        ref: 'Quote'
    },

	fullname:
	{
		type: String,
	},
        street: 
		{	type: String },

        city:
			{ type: String},

        state:
			{type: String},

        zipcode:{
			
		type: Number},
	
	
	 street2: 
		{	type: String },

        city2:
			{ type: String},

        state2:
			{type: String},

        zipcode2:{
			
		type: Number},
	count: {
		type:Number
	}
	
	
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);