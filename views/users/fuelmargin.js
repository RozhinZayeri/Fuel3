class margins {
    constructor(gallons, state, name, repeatingCustomer, zipCode) {
        this.state = state;
        this.gallons = gallons;
        this.name = name;
        this.repeatingCustomer = repeatingCustomer;
        this.zipCode = zipCode;
    }
    // getMargin function
    getMargin() {
        var margin = 0;	 
        // if from tx 
        if ((this.state) == "TX")
            margin = .02;
        else 
            margin = .04;

        // if previous customer
        if (this.repeatingCustomer == true)
            margin -= .01; 

        // gallons requested over 1000gallons?
        if(this.gallons > 1000)
            margin += .02;
        else
            margin += .03;		
        margin += .1;	
        
        return (margin * 1.50);
    }
};

class gallons{
    constructor(gallonAmount) {
        this.gallonAmount = gallonAmount;
    }
    // gallon requested function
    gallonsRequest() {
        var requestedGallons = gallonAmount;
        if(isNaN(requestedGallons)) 
            return "hello? real number pls.";	
        else if(requestedGallons < 0) {
            return "invalid entry";
        }
        return gallonAmount;
    }
};

module.exports = {margins, gallons}