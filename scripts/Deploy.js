const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const DefVerse = await ethers.getContractFactory("DefVerse");
  const feeWallet = ""; // Update with your fee wallet address
  const routerAddress = "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008"; // Update with the router address

  const defVerse = await DefVerse.deploy(feeWallet, routerAddress);

  console.log("DefVerse deployed to:", defVerse.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
