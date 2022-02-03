const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.api.moonbeam.network"
  );
  
  async function burn() {
    const [accounts] = await ethers.getSigners();
    const instance = await ethers.getContractFactory("johnNFT");
    const address = "0xB2Ef1c9bFC998f7D775f2b0380188d74F773173E";
    const contract = new ethers.Contract(address, instance.interface, provider)
    const Contract = contract.connect(accounts)

    for (i = 0; i < 100; i++){
        let tx = await Contract["safeTransferFrom(address,address,uint256)"]("0xA07876136c3A3141Dc2C25071330D3B08225e043", "0x000000000000000000000000000000000000dEaD", i)
        console.log("burned " + i, tx)
    }
  }

  burn()