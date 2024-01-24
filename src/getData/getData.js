const axios = require('axios');
const mapArrToString = require('../mapArrToStrings.js/mapArrToString')
const getData = async()=>{

    try {
         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data.map(user=>user.id);
    return mapArrToString(users)
    }catch(e){
     console.log(e)
    }
   
}
module.exports = getData