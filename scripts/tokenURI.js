//read token URI

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.api.moonbeam.network"
);

async function mint() {
  const instance = await ethers.getContractFactory("johnNFT");
  const diamondAddress = "0xB2Ef1c9bFC998f7D775f2b0380188d74F773173E";
  const contract = new ethers.Contract(diamondAddress, instance.interface, provider);

  const uri = await contract.tokenURI(89);
  console.log(uri);
}

mint();
