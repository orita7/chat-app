const express = require('express');
const { read } = require('fs');
const { SIGTERM } = require('constants');


//process.env.NODE_ENV // "development"

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
})

const server = app.listen(3000, () => console.log('Server ready'));

process.on('SIGTERM', () => {
    server.close(() => {
        server.close(() => {
            console.log('Process terminated');
        })
    })
})