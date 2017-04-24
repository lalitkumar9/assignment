/**
 * This javascript file will constitute the entry point of your solution.
 *
 * Edit it as you need.  It currently contains things that you might find helpful to get started.
 */

// This is not really required, but means that changes to index.html will cause a reload.
require('./site/index.html')
// Apply the styles in style.css to the page.
require('./site/style.css')


// Change this to get detailed logging from the stomp library
global.DEBUG = false
var maindata = [];

const url = "ws://localhost:8011/stomp"
const client = Stomp.client(url)

client.debug = function(msg) {
  if (global.DEBUG) {
    console.info(msg)
  }
}

function connectCallback() {
    console.log("you are connected")
  
}

function subscribeCallback() {
	 console.log("you are subscribed")
  
}
	

	
 client.connect( "", "",
  function() {
      client.subscribe("/fx/prices",
       function( message ) { 
		
	// Getting the data and parsed into JSON
       var data = JSON.parse(message.body);  
	   
	// this function update the available record and implemented in update.js   
	   updateData(data); 
          }, 
    { priority: 9 } 
      );
  
  }
 );





	