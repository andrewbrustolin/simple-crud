import { preurl, countrylist, urlbuilder } from './urlbuilder.js'

const urlarray = urlbuilder(preurl,countrylist);

async function getData() {
    let response = [];
    let data = [];
    for (let i = 0; i < urlarray.length; i++){
        response[i] = await fetch(urlarray[i]);
        data[i] = await response[i].json();
        console.log(data[i]);
    }
}

getData();