const api_url = 'http://localhost:8080/locations';

async function getLocation() {
  const response =await fetch(api_url);
  const data = await response.json();
  console.log(data);
}

//post request
async function postLocation() {
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
  const data = await response.json();
  console.log(data);
}