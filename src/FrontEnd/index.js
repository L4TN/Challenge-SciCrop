const api_url = 'http://localhost:8080/locations';

async function GetLocation() {
  const response =await fetch(api_url);
  const stored_Json = await response.json();
  console.log(stored_Json);
  return ConvertJsonToArray(stored_Json);
}

function ConvertJsonToArray(json) {
  var arr = [];
  for (var i in json) {
    arr.push(json[i]);
  }
}


//post request
async function PostLocation() {
  const response = await fetch(api_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ID: 'test',
      Name: 'test',
      Loc: 'test',
    }),
  });
  const stored_Json = await response.json();
  console.log(stored_Json);
}

final = GetLocation();
console.log(final);