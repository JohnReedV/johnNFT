const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.api.moonbeam.network"
  );
  
  async function burn() {
    const instance = await ethers.getContractFactory("johnNFT");
    const address = "0x7317efb32D4B51ddE3852Bf86aDC6ebA5227Df77";
    const contract = new ethers.Contract(address, instance.interface, provider)

    for (i = 0; i < 100; i++){
        await contract.burn(i)
        console.log("burned " + i)
    }
  }

  burn()