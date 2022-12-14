import { getData } from './fetch-api.js';
import * as asyncfs from 'fs/promises';
import  fs from 'fs';

async function dataGeneration(){
    let data = await getData();
   
    
    
    const path = "src/data-generation/data.json";
    console.log("Creating data table");

    if (fs.existsSync(path)) {
        console.log("Data table can't be overwritten");
    } else {
    asyncfs.writeFile(path, data)
    .then(console.log("Data table generated successfully"));
    }
    
 }

 await dataGeneration();