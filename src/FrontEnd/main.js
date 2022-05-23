var api_url = 'http://localhost:8080/locations'

var places = []; 
//A estrutura não precisa ser igual a do StefanuCoudini, funciona do mesmo jeito.
var places2 = [{"id": 0, "name":"Vittoria","loc":[-23.530531848630485,-46.63108232349241]},{"id": 0,"name":"Trapani","loc":[-23.531731921286504,-46.63051369518213]}];

async function GetLocation() {
  const response = await fetch(api_url)

  const stored_Json = await response.json()
  console.log(stored_Json)

  places = ConvertJsonToArray(stored_Json)
  console.log(places);

  return places
}

// Convert the Json to an array
function ConvertJsonToArray(stored_Json) {
  var arr = []
  for (var i in stored_Json) {
    arr.push(stored_Json[i])
  return arr
  }
}


// This is the function that is called in the html file to get the location
async function PostLocation() {

  // Getting the values from the form elements index.html inputs
  var lat = document.getElementById("Lat").value;
  var lng = document.getElementById("Long").value;
  var name = document.getElementById("name").value;

  lat = parseFloat(lat);
  lng = parseFloat(lng);
  
  //VALIDATION
  // console.log(lat)
  // console.log(lng)
  // console.log(name)

  //VALIDATION
  // var json_Aux = {
  //   ID: 90,
  //   Name: name,
  //   Loc: [lat, lng]
  // }
  // console.log(json_Aux)

  const response = await fetch(api_url, {
    method: 'POST',
    headers: {}, //O erro de CORS ocorria quando preenchia o Headers com Access-Control-Allow-Origin e Content-Type-application/json

    //Convertemos antes os valores de lat e lng pois estavam vindo como string, mas no console pareciam ser inteiros, para não dar erro de tipo
    body: JSON.stringify(
      {
        ID: 0,
        Name: name,
        Loc: [lat, lng]
      }
    )
  })

  const stored_Json = await response.json()
  //console.log(stored_Json)

  GetLocation();
  }


  

