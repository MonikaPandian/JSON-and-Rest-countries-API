//Step 1:creating an XHR(XML-HTTP Request) object
//XML-HTTP Request are a way to interact with the servers via API
//API is restcountries
var request=new XMLHttpRequest();
//Step 2:create a request/open a request
//open is an inbuilt method.open method consists of two parameters:HTTP method,API-URL
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//Step 3:creating a bridge
request.send();
//Step 4:Status code for success:200
//once the data successfully received from the server
//the data travelling from the server
request.onload=function(){
    var result=JSON.parse(request.response);
 
for (var key in result) {
    console.log("name : "+result[key].name+" "+"region : "+result[key].region+" "+"subregion : "+result[key].subregion+" "+"population : "+result[key].population);
    
  }
  


}
