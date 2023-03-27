const { ethers, run, network } = require("hardhat");


//MAIN
// while using hardhat to get ether it knows the contract folder so we do not to tell folder but directly contract file 
async function main() {
  const contractFactory = await ethers.getContractFactory("myContract");

  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log(`deploying contract at ${contract.address}`);
  //hardhat provide default RPC_URL and default private key
  console.log(network.config.chainId);
  if (network.config.chainId == 4 && process.env.ETHERSCAN_API_KEY) {
    console.log(network.config.chainId);
    await contract.deployTransaction.wait(3); // wait so that the get regitered on etherscan to to get verified
    await verify(contract.address, []);
  }
}

// verify function 
async function verify(contractAddress, args) {
  try {
    console.log("verifiying");
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args
    });
  }
  catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified");
    }
    else {
      console.log("already verified");
      console.log(e + "  ghtdtuduy ");
    }
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });