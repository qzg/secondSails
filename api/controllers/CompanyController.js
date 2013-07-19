/**
 * CompanyController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  
  /**
   * /company/index
   */ 
  index: function (req,res) {

    // This will render the view: 
    // /Users/qzg/Development/secondSails/views/company/index.jade
    res.view();

  }

};
