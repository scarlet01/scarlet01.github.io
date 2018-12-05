import {getjwt} from '../cisco/guest.js';
//var jwt = require ('../cisco/guest.js').getjwt;
document.getElementById('sometag').innerHTML = getjwt();

