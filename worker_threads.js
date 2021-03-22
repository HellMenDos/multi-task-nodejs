const {
    Worker, isMainThread, parentPort, workerData
  } = require('worker_threads');
const numCPUs = require('os').cpus().length;

    let worker = [];
   
    for (let i = 0; i < numCPUs; i++) {
        
        let port = Math.ceil(Math.random()*10000)
        worker.push(new Worker('./worker.js',{workerData: port }))
    }

