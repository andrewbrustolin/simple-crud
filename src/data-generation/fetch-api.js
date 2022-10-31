import { preurl, countrylist, urlbuilder } from './urlbuilder.js'

const urlarray = urlbuilder(preurl,countrylist);

export async function getData() {
    let response;
    let data;
    let data_object = [];
    for (let i = 0; i < urlarray.length; i++){
        response = await fetch(urlarray[i]);
        data = await response.json();
       
        if (data.length > 0){
            for (let j = 0; j < data.length; j++){
                data_object.push(data[j]);
            }
           
            
        }
        

        
        
        
    }
    
    data_object = JSON.stringify(data_object, null, 2);
    return data_object;
}

