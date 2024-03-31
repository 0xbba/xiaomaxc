const { ethers } = require("hardhat");

(async () => {
    const Mint712 = await ethers.getContractFactory("ContractDeployerFactory");
    const mint712 = await Mint712.deploy();
    await mint712.deployed();
    console.log("Mint712 deployed to:", mint712.address);
  
})();