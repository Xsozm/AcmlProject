let app = require('express');
let server = require('http').Server(app);
let io = require('socket.io')(server);
let redis = require('redis');

server.listen(8890,function(){
    console.log("Running on port 8890");
});
io.on('connection',function (socket) {
    console.log("Client Connected");
//    let client = redis.createClient();
//    client.subscribe('message');
//    client.on('message',function (channel,mesage) {
//        console.log("new event"+channel+" "+mesage);
//    })

//    client.on('disconnect',function () {
//        console.log("client out");
//    })
});
