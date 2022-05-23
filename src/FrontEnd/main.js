const api_url = 'http://localhost:8080/locations'
  //javascript placeholder

var places = []; 
var places2 = [{"name":"Vittoria","loc":[36.95374,14.53318],"pop":62747},{"name":"Trapani","loc":[38.01604,12.54443],"pop":70654},{"name":"Siracusa","loc":[37.08515,15.273],"pop":123768},{"name":"Sciacca","loc":[37.50824,13.08805],"pop":41023},{"name":"Sardinia","loc":[40,9],"pop":1670219},{"name":"Rossano","loc":[39.5751,16.6349],"pop":38123},{"name":"Rende","loc":[39.33199,16.18439],"pop":35376},{"name":"Ragusa","loc":[36.92824,14.71719],"pop":73333},{"name":"Partinico","loc":[38.04395,13.12004],"pop":31852}];


async function GetLocation() {
  const response = await fetch(api_url)
  const stored_Json = await response.json()
  console.log(stored_Json)
  
  console.log(ConvertJsonToArray(stored_Json))

  places = stored_Json;
  console.log(places);

  return ConvertJsonToArray(stored_Json)
}

// Convert the Json to an array
function ConvertJsonToArray(stored_Json) {
  var arr = []
  for (var i in stored_Json) {
    arr.push(json[i])
  }
}


// This is the function that is called in the html file to get the location
async function PostLocation() {

  // Getting the values from the form elements index.html
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

    //Convertemos antes os valores para não dar erro de tipo
    body: JSON.stringify(
      {
        ID: 0,
        Name: name,
        Loc: [lat, lng]
      }
    )
  })

  const stored_Json = await response.json()
  console.log(stored_Json)

  GetLocation();
  }


  

