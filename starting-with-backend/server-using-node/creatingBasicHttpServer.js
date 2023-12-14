const http = require('http'); // required the http module provided by nodejs

const PORT = 3000;

// Using the createServer fn we can actually create a bsic http server using http module
// This fn returns a server object, and takes a callback as an argument
// This fn created a server object but didn't start the server
const server = http.createServer(function listener(request,response){
    /*
        *  request -> we will be able to see the details of incoming http request
        *  response -> we will be able to configure what response we need to send 
                        for an incoming http request
    
    */
    // This callback is a kind of listener fn that is going to collect
    // every http request that we will make to our server
    // console.log("incoming request", request);
    // console.log("response object",response);
    if(request.url === '/home'){
        // if we make a request on /home this if block will be called
        // response.end("welcome to home "); // it takes string as argument to return
        // or
        response.write("First Response ");
        response.write("Second Response ");
        response.end("END")
        

    }
    console.log("request recieved");

});

server.listen(PORT,function exec(){
    // once we succesfully boot up the server on given port, this callback
    // will be executed.
    console.log(`Server is up and running on port ${PORT}`);
})