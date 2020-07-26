//use 'npm start' in the terminal to start a server on port 5000
// use 'npm run dev' to run a the port 5000 server which will auto refresh

const express = require('express'); 

const app = express();

app.get('/', (request, response) => {
    response.json({
        message: 'Server!'
    })
});

app.post('/')

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
})