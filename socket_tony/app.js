const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const seller = []
const consumer = []


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function (socket) {
    console.log('user id ==', socket.id, ' is connected');
    socket.on('open', function (msg) {
        /*
            {
                role: 'seller' or 'consumer',
                username: 'unique_name',
            }
        */
        console.log('A user is connected with open event');
        console.log('User info ==', msg);
        if (msg) {
            if(msg.role && msg.username){
            if (msg.role == 'seller') {
                let judge = false;
                for (let i = 0; i < seller.length; i++) {
                    if (seller[i].username == msg.username) {
                        seller[i].socket = socket;
                        judge = true;
                    }
                }
                if (judge == false) {
                    let per_seller = {
                        username: msg.username,
                        socket: socket
                    }
                    console.log('per_seller ==', per_seller.socket.id);
                    seller.push(per_seller);
                }
            } else if (msg.role == 'consumer') {
                let judge = false;
                for (let i = 0; i < consumer.length; i++) {
                    if (consumer[i].username == msg.username) {
                        consumer[i].socket = socket;
                        judge = true;
                    }
                }
                if (judge == false) {
                    let per_consumer = {
                        username: msg.username,
                        socket: socket
                    }
                    console.log('per_consumer ==', per_consumer.socket.id);
                    consumer.push(per_consumer);
                }
            }
        }else{
            socket.emit('err', 'User data is not available. Maybe format is wrong.');
        }
    } else {
            socket.emit('err', 'Fail to identify user info. You should make sure it is a correct json object to open event');
        }
    })
    socket.on('new message', function (data) {
        /*
        must be:
                {
                    username: 'unique_name',
                    receiver : '賣家或買家的user_name',
                    receiver_role 'customer or seller',
                    msg: 'user said'
                }
        */
        console.log('A message is sent in socket.io');
        console.log(data);
        if (data.receiver_role == 'seller') {
            let index = -1;
            for (let c = 0; c < seller.length; c++) {
                if (seller[c].username == data.receiver) {
                    index = c;
                }
            }
            if (index != -1) {
                console.log('A seller msg is sented');
                //seller[index].socket.send(data.username + “:” + data.msg);
                seller[index].socket.emit('new message', String(data.username + ":" + data.msg));
                //console.log('A seller msg is sented');
            } else if (index == -1) {
                socket.emit('err', 'user not found');
            }
        }
        if (data.receiver_role == 'consumer') {
            let index = -1;
            for (let c = 0; c < consumer.length; c++) {
                if (consumer[c].username == data.receiver) {
                    index = c;
                }
            }
            if (index != -1) {
                console.log('A comsumer msg is sented');
                //consumer[index].socket.send(data.username + “:” + data.msg);
                consumer[index].socket.emit('new message', String(data.username + ":" + data.msg));
                //console.log('A comsumer msg is sented');
            } else if (index == -1) {
                socket.emit('err', 'user not found');
            }
        }
    })
    socket.on('disconnect', function () {
        console.log('a user disconnected');
    })
})

server.listen(5000, () => {console.log("listen on 5000")});