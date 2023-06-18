import * as handlers from "./handlers/handlers.js";
const fs = require("fs/promises");
const express = require("express");
const app = express();

let blah;
const products = [
  {
    id: 1,
    name: "DI-Connect",
    desc: "DIS tool to migrate db from legacy to newer systems",
  },
  {
    id: 2,
    name: "DI-Quality",
    desc: "DIS tool to enrich the data of customer",
  },
  {
    id: 3,
    name: "DI-Discovery",
    desc: "DIS tool to discover new data insights in customer env",
  },
];

app.use(express.json());

app.post("/products/:filename", (req, res) => {
  const { filename } = req.params;
  const jsonBody = req.body;
  products.push(jsonBody);
  writeIntoFile(filename, products);
  res.send(jsonBody);
});

app.get("/api/v1/servers", handlers.get);

app.get("/api/v1/servers/:serverId", handlers.read);

app.post("/api/v1/servers/post", handlers.create);

app.put("/api/v1/servers/:serverId", handlers.update);

app.delete("/api/v1/servers/:serverId", handlers.deleteServer);

// app.get("/products/:productId", (req, res) => {
//   const { productId } = req.params;
//   const product = products.filter(product.id === productId);
//   if (product == null) {
//     res.status(404).send(`Product ${productId} is not defined`);
//   }
// });

// app.get("/blah", (req, res) => {
//   res.send(blah);
// });

// async function writeIntoFile(filePath, content) {
//   fs.writeFile(filePath, JSON.stringify(content)).then(() => {
//     console.log(`content written into file ${filePath}`);
//   });
// }

// read contents from file and load
// async function readFile() {
//   fs.readFile("dummy.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     blah = data;
//   });
// }

// async function startServer() {
//   await readFile();
// }
// startServer();

app.listen(8080, () => {
  console.log("Server started at port 8080");
});
