//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/xsell'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/xsell/'}),
);

// Start the app by listening on the default Heroku port
console.log('listening on....' + process.env.PORT)
app.listen(process.env.PORT || 8080);