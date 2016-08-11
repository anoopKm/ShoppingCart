var serverHandler = require('./src/server.jsx');

module.exports = [{
    method: 'GET',
    path: '/',
    handler: serverHandler
}];
