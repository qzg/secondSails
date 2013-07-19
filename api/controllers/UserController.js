/**
 * UserController
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
   * /user/index
   */ 
  index: function (req,res) {

    // This will render the view: 
    // /Users/Shared/secondSails/views/user/index.jade
    res.view();

  },
  

  /**
   * /user/validate
   */ 
  validate: function (req,res) {

    // This will render the view: 
    // /Users/Shared/secondSails/views/user/validate.jade
    res.view();

  },


  /**
   * /user/dashboard
   */ 
  dashboard: function (req,res) {

    // This will render the view: 
    // /Users/Shared/secondSails/views/user/dashboard.jade
    
    var testimonials = {
      "young-short-red-haired-serious-lady"   :  {
        "client"    :  "Sarah",
        "quote"     :  "This was a great experience - and I would definitely recommend both Dr. Sheskier and 2nd.MD to friends and family."
      },
      "young-ponytail-dark-haired-brown-lady" :  {
        "client"    :  "Melissa",
        "quote"     :  "With 2nd.MD, I had an appointment with a kidney specialist in less than a week. That is of value beyond words."
      },
      "short-brown-hair-smiling-man"          :  {
        "client"    :  "Neil",
        "quote"     :  "Dr. Raymond understands IBS way better than any of the specialists I've seen."
      },
      "middle-aged-smiling-blonde-lady"       :  {
        "client"    :  "Bridgette",
        "quote"     :  "Having the opportunity to talk face to face with a cardiologist in a relaxed setting gave me a peace of mind that is truly invaluable."
      },
      "short-dark-haired-lady-smiling"        :  {
        "client"    :  "Eve",
        "quote"     :  "I didn't get the typical suggestions I have been getting for years ... he suggested a few things that I had never thought of."
      },
      "young-black-haired-lady-smiling"       :  {
        "client"    :  "Katie",
        "quote"     :  "The doctor was very knowledgable and gave me more information on the issue than any doctor I have met with face to face!"
      },
      "white-haired-glasses-man"              :  {
        "client"    :  "Joseph",
        "quote"     :  "As good as being physically present with a specialist. Dr. Orr reviewed my file prior to the appointment and has great knowledge in neurology. Well prepared and answered all my questions."
      },
      "brunette-man-glasses-smling"  :  {
        "client"    :  "Doug",
        "quote"     :  "Dr. Geiger was very professional, caring and really talked to me about my problem.  She had great insight and knew about new studies that no one else has told me about!"
      }
    };


    res.view({testimonials: testimonials});
  },


  /**
   * /user/create
   */ 
  create: function (req,res) {

    // This will render the view: 
    // /Users/Shared/secondSails/views/user/create.jade

    res.view();

  },


  /**
   * /user/destroy
   */ 
  destroy: function (req,res) {

    // This will render the view: 
    // /Users/Shared/secondSails/views/user/destroy.jade
    res.view();

  }

};
