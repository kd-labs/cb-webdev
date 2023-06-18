import * as Server from "../model/server.js";

export function list(req, res) {
  let { sort } = req.query;
  sort = sort ? sort.toLowerCase() : "desc";
  if (!(sort === "asc" || sort === "desc")) {
    return res.status(400).send("Invalid sort Params");
  }
  const servers = Server.getServers(sort);
  res.json({ servers });
}

export async function create(req, res) {
  const { name, zone } = req.body;
  if (name === undefined || zone === undefined) {
    return res.status(400).send("Missing name or zone");
  }
  const server = await Server.createServer({ name, zone });
  console.log({ server });
  res.send("ok");
}

export function read(req, res) {
  // servers/:id
  const { serverId } = req.params;
  // console.log(`id : ${id}`);
  const server = Server.getServer(serverId);
  res.json({ server });
}

export async function update(req, res) {
  const { serverId } = req.params;
  const { name, zone } = req.body;
  if (name === undefined && zone === undefined) {
    return res.status(400).send("Missing name or zone");
  }
  const server = await Server.updateServer(serverId, { name, zone });
  console.log({ server });
  res.send("ok");
}

export async function deleteServer(req, res) {
  const { id } = req.params;
  const success = await Server.deleteServer(id);
  console.log(`deleting ${id}`, success);
  res.send("ok");
}
