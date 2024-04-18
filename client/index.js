const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

const merkleTree = new MerkleTree(niceList);

console.log(merkleTree.getRoot())

async function main() {
  // TODO: how do we prove to the server we're on the nice list?

  const proof = merkleTree.getProof(1);
  const name = "Miss Margarita Lowe Sr.";
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof,
    name,
  });

  console.log({ gift });
}

main();
