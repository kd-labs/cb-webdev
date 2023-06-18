const express = require("express");
const app = express();

const servers = [
  { id: 1, region: "us-east-1a", age: "5D", status: "up" },
  { id: 2, region: "ind-mum-1a", age: "10D", status: "up" },
];

// app.use((req, res) => {
//   res.status(200).send("<h2>Response from Express Server</h2>");
// });

app.get("/servers", (req, res) => {
  res.status(200).json(servers);
});

app.get("/servers/search", (req, res) => {
  const { searchExp } = req.query;
  res.status(200).send(`send response for search ${searchExp}`);
});

app.post("/servers", (req, res) => {
  res.status(200).send("created a new server");
});

app.get("/servers/:serverId", (req, res) => {
  const { serverId } = req.params;
  res.status(200).send(`server ${serverId} deleted`);
});

// default route when incoming request does not matches with any path matchers above
app.all("*", (req, res) => {
  res.status(200).send("default path");
});

// starting express server
app.listen(1234, () => {
  console.log("Server started on port 1234");
});
