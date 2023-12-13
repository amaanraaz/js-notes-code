const http = require('http'); // required the http module provided by nodejs

const PORT = 3000;

// Using the createServer fn we can actually create a bsic http server using http module
// This fn returns a server object, and takes a callback as an argument
// This fn created a server object but didn't start the server
const server = http.createServer(function listener(){
    // This callback is a kind of listener fn that is going to collect
    // every http request that we will make to our server

});

server.listen(PORT,function exec(){
    // once we succesfully boot up the server on given port, this callback
    // will be executed.
    console.log(`Server is up and running on port ${PORT}`);
})