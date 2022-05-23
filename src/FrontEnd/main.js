const api_url = 'http://localhost:8080/locations'
  //javascript placeholder

var places = [];

async function GetLocation() {
  const response = await fetch(api_url)
  const stored_Json = await response.json()
  console.log(stored_Json)
  
  //console.log(ConvertJsonToArray(stored_Json))
  //return ConvertJsonToArray(stored_Json)

  places = stored_Json;
  console.log(places);
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
    body: JSON.stringify(
      {
        ID: 90,
        Name: name,
        Loc: [lat, lng]
      }
    )
  })

  const stored_Json = await response.json()
  console.log(stored_Json)

  GetLocation();
  }


  

