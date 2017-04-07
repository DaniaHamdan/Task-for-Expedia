module.exports = function (app, express) {
  //use middleware to provide concise output colored by response status for development use
 //use the built in middleware to serve static files such as images, CSS files, and JavaScript files.
  app.use(express.static(__dirname + '/../../client'));

};