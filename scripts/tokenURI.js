//read token URI

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.api.moonbeam.network"
);

async function mint() {
  const instance = await ethers.getContractFactory("johnNFT");
  const diamondAddress = "0x7317efb32D4B51ddE3852Bf86aDC6ebA5227Df77";
  const contract = new ethers.Contract(diamondAddress, instance.interface, provider);

  const uri = await contract.tokenURI(89);
  console.log(uri);
}

mint();
