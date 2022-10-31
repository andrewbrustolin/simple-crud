import express from 'express';
import { router } from './routes.js';
import { initializeDB } from '../database/db-init.js';

export const unis = await initializeDB();


const port = 8080;
const app = express();

app.use(express.json());
app.use('/', router);



app.listen(port);
console.log('Server started at http://localhost:' + port);


