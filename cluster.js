const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
       cluster.fork() 
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        // if worker die we restart worker
        cluster.fork() 
      });

}else {


    // Create server 
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`This server start in ${process.pid} pid`);
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}