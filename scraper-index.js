//document.getElementById("search")
 
/*$( "#search1" ).keyup(function() {
    alert( "Handler for .keyup() called." );
  }); */

const getResults = require("./scraper");
         
const result =  getResults(); 

result.then(function(data) {
    console.log(data.tags[0])
    console.log(data.tags[0])})

  console.log(1+ 8);
  
    