import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 8080;

const app = express();


// app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.status(200).json({ message: 'aaaaaa' });
    
    
});

app.post('/', function(req, res) {
   
    res.sendStatus(201);
});

app.put('/:id', function(req, res) {
   
    res.sendStatus(201);
});

app.delete('/:id', function(req, res) {
   
    res.sendStatus(201);
});


app.listen(port);
console.log('Server started at http://localhost:' + port);