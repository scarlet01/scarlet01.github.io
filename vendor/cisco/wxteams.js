// Declare some globals
let activecall, spark;

// Get JWT for Guest mode calling 
async function getjwt() {

    //Use this URL for easy JWT guestoken creation
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

// Initialize SDK
//var CiscoSpark = require('ciscospark');
spark = ciscospark.init();

//var token = 'your.guest.token.here';
// wait until the SDK is loaded and ready
spark.once(`ready`, function() {
    spark.authorization.requestAccessTokenFromJwt({jwt: getjwt()})
      .then(() => {
        // the user is now authenticated with a guest token (JWT)
        // proceed with your app logic
        console.log (this)
      })
});