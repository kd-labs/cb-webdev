import * as handlers from "./handlers/handlers.js";
import express from "express";

const app = express();

app.use(express.json());

app.get("/api/v1/servers", handlers.list);

app.get("/api/v1/servers/:serverId", handlers.read);

app.post("/api/v1/servers", handlers.create);

app.put("/api/v1/servers/:serverId", handlers.update);

app.delete("/api/v1/servers/:serverId", handlers.deleteServer);

app.listen(8080, () => {
  console.log("Server started at port 8080");
});
