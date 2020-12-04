var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3001;
app.use(express.json());


app.get('/', function(request, response){
  console.log(request.body);      // your JSON
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  
   response.json({'response':'Hello World'});    // echo the result back
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  })