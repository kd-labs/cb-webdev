import { v4 as uuid } from "uuid";
// import MapStore from "../lib/mapstore.js";
import * as fsutils from "../lib/fsutils.js";

// Server {
//  id: string
//  name: string
//  zone: string
// }
const SERVERS = new Map();

fsutils.read().then(
  (servers) => {
    // console.log(servers);
    for (let [id, server] of servers) {
      SERVERS.set(id, server);
    }
  },
  (err) => {
    console.error(err);
  }
);

export function getServers(sort) {
  const servers = Array.from(SERVERS.values());
  servers.sort((a, b) => {
    if (sort === "asc") {
      return a.lastEdited - b.lastEdited;
    } else {
      return b.lastEdited - a.lastEdited;
    }
  });
  return servers;
}

export async function createServer({ name, zone }) {
  const id = uuid();
  const server = {
    id,
    name,
    zone,
  };
  SERVERS.set(id, server);
  await fsutils.save(SERVERS);
  return server;
}

export async function updateServer(id, { name, zone }) {
  if (!SERVERS.has(id)) {
    return null;
  }
  const server = SERVERS.get(id);
  server.name = name ?? server.name;
  server.zone = zone ?? server.zone;
  await fsutils.save(SERVERS);
  return { ...server }; // returning the clone of the object
}

export function getServer(id) {
  console.log(SERVERS);
  if (!SERVERS.has(id)) {
    return null;
  }
  const server = SERVERS.get(id);
  return { ...server };
}

export async function deleteServer(id) {
  const success = SERVERS.delete(id);
  await fsutils.save(SERVERS);
  return success;
}
