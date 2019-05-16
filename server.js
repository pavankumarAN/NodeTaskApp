const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);


server.listen(PORT, () => {
    console.log(`The app is running in ${PORT}`);
});