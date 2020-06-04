/*var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   res.send('Welcome to JavaTpoint');  
})  
const os=require('os');  
console.log("os.cpus(): \n",os.cpus());  
console.log("os.arch(): \n",os.arch());  
console.log("os.networkInterfaces(): \n",os.networkInterfaces());   


var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  */


var express = require('express');  
var path = require("path")

//linking express
var app = express();  

//routing


//dirname
app.use(express.static(path.join(__dirname,"quiznaija")))

//port no
const port = 3000

//server
app.listen(port,()=>{
    console.log("Server Deployed")
});