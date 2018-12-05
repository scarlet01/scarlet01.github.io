
//const cot_url = 'https://v0wh322qyf.execute-api.us-east-1.amazonaws.com/latest/cot';


//document.getElementById("session_id").innerHTML = web_session;

// Declare some globals that we'll need throughout
//let jwt;

//---- Async Fetch() OAuth token for Guest ----//
//https://stackoverflow.com/questions/29775797/fetch-post-json-data

export async function getjwt() {

    //Use these URLs for easy guestoken access
    const jot_url = 'https://v0wh322qyf.execute-api.us-east-1.amazonaws.com/latest/jot';

    //Declare a random 5 charater websession id
    const web_session = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    console.log("async JWT retrival func started...");
    const rawResponse = await fetch(jot_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: 'WebUser_'+web_session, email: 'sample@sample.com'})
    });
    //let jwt = await rawResponse.json();
    //return jwt;
    return await rawResponse.json();
};

/*
function add(x,y){
    return x+y;
};
*/

//export {getjwt};
//module.exports.getjwt = getjwt;