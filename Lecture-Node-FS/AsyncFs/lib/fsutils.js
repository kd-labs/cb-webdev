import { readFile, writeFile } from "fs/promises";
import path from "path";

const dataDir = "data";

const dbfile = path.resolve(dataDir, "servers.json");

export async function save(data) {
  console.log(`writing to ${dbfile}`);
  const serializedData = JSON.stringify(Array.from(data.entries()));
  await writeFile(dbfile, serializedData);
}

export async function read() {
  console.log(`reading from ${dbfile}`);
  const data = await readFile(dbfile, "utf-8");
  const parsed = JSON.parse(data);
  return new Map(parsed);
}
