const express = require('express');
const cors = require('cors');
const logger = require('./logger'); // Update the path to your logger file

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500', 'http://example3.com'];

var corsOptions = {
    origin: function (origin, callback) {
        logger.info(`Request origin: ${origin}`);
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: "get"
};

app.get('/data', cors(corsOptions), (req, res) => {
    logger.info('Data endpoint accessed');
    res.json({ msg: 'This is CORS-enabled for a whitelisted domain.' });
});

app.listen(port, () => {
    logger.info(`Server listening at http://localhost:${port}`);
});
