Server integrated with mongoDB database, serving Read operations for data extracted from this URL: http://universities.hipolabs.com <br></br>
The data is a list containing several universities from around the world and its related contact information <br></br><br></br>

Dependencies needed to start the server:<br></br>
Node<br></br>
Express<br></br>
Mongodb node driver<br></br>




- Install and start Mongodb on your OS <br></br>
- Initialize Mongodb <br></br>
- Create the database and collection using the terminal with the following:<br></br>
      <b>mongoimport --db=uni-database --collection=Unis --jsonArray --file=data.json</b> <br></br>
- To start the application simply open your terminal, move to the project's folder and enter "node src/backend/server.js <br></br>
- After the server and database are initialized, go to http://localhost:8080/universities to retrieve the list with all the universities

