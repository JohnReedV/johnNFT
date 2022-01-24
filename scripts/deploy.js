/* global ethers */

async function deploy() {
  const hre = require("hardhat");
  
    const factory = await hre.ethers.getContractFactory("johnNFT");
    const contract = await factory.deploy();
  
    await contract.deployed();
  
    console.log("John NFT deployed to:", contract.address);
  }

deploy()