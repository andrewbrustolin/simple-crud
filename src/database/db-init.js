import { MongoClient } from "mongodb";


export async function initializeDB() {
    
    const url = "mongodb://localhost:27017/";
    const dbname = "uni-database";
    const collection_name = "Unis";
    

    try {
        
        const client = await MongoClient.connect(url + dbname);
        const db = client.db(dbname);
        const unis = db.collection(collection_name);
        
        return unis;

    }catch (err) {
        console.log(err);
    }
        
}
    

