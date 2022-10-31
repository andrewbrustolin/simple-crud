import { unis } from "./server.js";
import * as mongodb from 'mongodb';
const ObjectID = mongodb.ObjectId;


export function home(req,res){
    res.status(200).send("server is running");

}

export async function listAllUni(req,res){
    
    const filter = req.query;

    if (Object.keys(filter).length === 0) {
        const all_data = await unis.find({}).toArray();
        res.json(all_data);
    } else {
        
        const filtered_data = await unis.find({"country": filter.country}).toArray();
        res.json(filtered_data);
        console.log(filter.country);
        
    }

}

export async function listUniId(req, res){

    try {
        const id = req.params.id;
        const data_by_id = await unis.find({"_id": ObjectID(id)}).toArray();
        res.json(data_by_id);
    }catch(err) {
        res.send("Id not found");
    }


}

export async function postUni(req,res){

    console.log("trying to post");
    const insertion = await unis.insertOne(
        {"alpha_two_code": req.body.alpha_two_code,
        "web_pages": req.body.web_pages,
        "country": req.body.country,
        "domains": req.body.domains,
        "state_province": req.body.state_province
    });
    // res.json(insertion);
    console.log("data created");


}

export function updateUni(req,res){

}

export function deleteUni(req,res){
    
}