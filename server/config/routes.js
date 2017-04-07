var Controller=require('../../hotelData/hotelsController.js');
module.exports = function (app, express) {

	app.get('/api/getAll',Controller.alldata);
};