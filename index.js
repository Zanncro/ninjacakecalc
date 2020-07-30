//use 'npm start' in the terminal to start a server on port 5000
// use 'npm run dev' to run a the port 5000 server which will auto refresh

const express = require('express'); 
const cors = require('cors');
const monk = require('monk')

const app = express();

const db = monk('localhost/ninjacakecards');
const exchangeRates = db.get('exchangeRates');

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.json({
        message: 'Server!'
    })
});

function isValidInput(exchangeRate) {
    return isNaN(exchangeRate)
}

app.post('/exchangeRate', (request, response) => {
    //insert into DB
    if(isValidInput(request.body)) {
         console.log(request.body)   
         customExchangeRate = request.body.customExchangeRate;
        const exchangeRate = {
            customExchangeRate
        }
        
        console.log(customExchangeRate)  
        exchangeRates
            .insert(customExchangeRate)
            .then(createdExchangeRate => {
                    response.json(createdExchangeRate)
                });
    }
    else {
        console.log('Invalid Input')
        response.status(422)
        response.json({
            message: 'Not a valid input'
        })
    }
})

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000')
})



 