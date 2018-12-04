//Use these URLs for easy guestoken access
const jot_url = 'https://v0wh322qyf.execute-api.us-east-1.amazonaws.com/latest/jot';
//const cot_url = 'https://v0wh322qyf.execute-api.us-east-1.amazonaws.com/latest/cot';

//Declare a random 5 charater websession id
const web_session = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
//document.getElementById("session_id").innerHTML = web_session;

// Declare some globals that we'll need throughout
let jwt;

//---- Async Fetch() OAuth token for Guest ----//
//https://stackoverflow.com/questions/29775797/fetch-post-json-data

(async () => {

    console.log("async JWT and COT retrival func started...");
    const rawResponse = await fetch(jot_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: 'WebUser_'+web_session, email: 'sample@sample.com'})
    });
    jwt = await rawResponse.json();
  
    const raw_cot_Response = await fetch(cot_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({jwt: jwt})
    });
    //cot = await raw_cot_Response.json();
  })()
  .then(
    //alert("got cot")
    () => {
    console.log ("Recieved JOT - " + JSON.stringify(jwt));
    //console.log ("Recieved COT - " + JSON.stringify(cot.token));
    //connect();
    return jwt;
  }
  );

function add(x,y){
    return x+y;
};

export {add};