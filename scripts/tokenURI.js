//read token URI

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.api.moonbeam.network"
);

async function mint() {
  const instance = await ethers.getContractFactory("johnNFT");
  const diamondAddress = "0x725720431473249bf4D184B02a75693fC30313fa";
  const contract = new ethers.Contract(diamondAddress, instance.interface, provider);

  const uri = await contract.tokenURI(89);
  console.log(uri);
}

mint();
