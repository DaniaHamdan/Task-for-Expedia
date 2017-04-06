var Controller=require('../../offers/offersController.js');

module.exports = function (app, express) {

	app.get('/api/getAll',Controller.allOffers);
};