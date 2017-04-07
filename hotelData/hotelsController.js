var hotels = require ('./hotels.json');
module.exports = {
	alldata: function (req, res) {	
  	res.json(hotels.offers.Hotel);
          
         }
}