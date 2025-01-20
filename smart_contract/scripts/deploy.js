const { ethers } = require("hardhat");

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Using deployer address:", deployer.address);

  // Check if the deployer is valid
  if (!deployer) {
    throw new Error("Deployer signer is null. Check network configuration.");
  }

  const balance = await deployer.getBalance();
  console.log("Deployer balance:", ethers.utils.formatEther(balance));

  
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
