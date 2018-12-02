let app = require('express');
let server = require('http').Server(app);
let io = require('socket.io')(server);
let redis = require('redis');

server.listen(8890,function(){
    console.log("Running on port 8890");
});
io.on('connection',function (socket) {
    console.log("Client Connected");
   let client = redis.createClient();
   client.subscribe('message');
   client.on('message',function (channel,message) {
     message=JSON.parse(message);
     console.log(message.notifier_id);
      let channel2='user'+message.notifier_id;
     console.log(channel2);
       socket.emit(channel2,message);
   })

   client.on('disconnect',function () {
       console.log("client out");
   })
});
