process.env.UV_THREADPOOL_SIZE = 20;
const http = require("http");
const figlet = require("figlet");
const bcrypt = require("bcrypt");

// Default : 3500 req/sec
//UV_THREADPOOL_SIZE=1, 1000 req/sec
//UV_THREADPOOL_SIZE=2, 1900 req/sec
//UV_THREADPOOL_SIZE=3, 2800 req/sec
//UV_THREADPOOL_SIZE=4, 3500 req/sec
//UV_THREADPOOL_SIZE=5, 4200 req/sec
//UV_THREADPOOL_SIZE=9, 4900 req/sec

const server = http.createServer((req, res) => {
  bcrypt.hash("HelloWorld", 2).then((hash) => {
    res.statusCode = 200;
    res.end(hash);
  });
});

server.listen(8080, () => {
  figlet("***** KD Labs ******", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
});
