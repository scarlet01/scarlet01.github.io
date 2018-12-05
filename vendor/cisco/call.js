import {getjwt} from '../cisco/guest.js';
//var jwt = require ('../cisco/guest.js').getjwt;
let jwt = getjwt();
console.log jwt;
document.getElementById('sometag').innerHTML = jwt;

