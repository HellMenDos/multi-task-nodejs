const {
    Worker, isMainThread, parentPort, workerData
  } = require('worker_threads');
const http = require('http');

  const port = workerData

  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`This server start in ${port} port`);
  }).listen(  port  );

  console.log(`Worker ${port} started`);
