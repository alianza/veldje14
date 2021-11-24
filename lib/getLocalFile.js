import { readFileSync } from "fs"

export default function getLocalFile(fileName) {
  return readFileSync(`${process.cwd()}/data/${fileName}`, "utf8")
}
