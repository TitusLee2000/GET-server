const http = require('http');
const App = require('./app'); // Import your class

const PORT = process.env.PORT || 8000;
const myApp = new App(); // Instantiate the class

http
  .createServer((req, res) => {
    myApp.handleRequest(req, res);
  })
  .listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });

// http://localhost:8000/COMP4537/labs/3/getDate/?name=Titus
// http://localhost:8000/COMP4537/labs/3/writeFile/?text=BCIT
// http://localhost:8000/COMP4537/labs/3/readFile/file.txt
