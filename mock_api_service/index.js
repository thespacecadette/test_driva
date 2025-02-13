var express = require('express');
var app = express();

// CORS
var cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:8080',
}

// TODO: use real data and replace below
var MOCK_LENDER_DATA = require('./mock_data');

// TODO : add to env file
const API_ENDPOINT_PORT = 9000;

// TODO: Security (??)
// TODO: simple tests
app.use(cors(corsOptions))
app.get('/lenders/get', (req, res, next) => {
  // TODO: Calculate lender repayment based on customer loan amount input and the lender rate.
    res.json({
        status: 200,
        data: MOCK_LENDER_DATA,
    });
});
app.listen(API_ENDPOINT_PORT, () => {
  console.log(`Server running on port ${API_ENDPOINT_PORT} with CORS enabled on localhost:8080`);
});
 