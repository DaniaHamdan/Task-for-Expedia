var Offers = require ('./offers.json');
module.exports = {
	allOffers: function (req, res) {	
  	res.json(Offers.offers.Hotel);
          
         }
}