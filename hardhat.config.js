require("hardhat/config");
require("hardhat-gas-reporter");
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
// require("./tasks/block-number");
/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});
const PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;
const URL = process.env.RINKEBY_RPC_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork:"hardhat",
  networks: {
    rinkeby: {
      url: URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    }
  },
  gasReporter: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      rinkeby: "NZJTBJV7M86KQQ5B569N9VMUHT6JUR3GA5",
    },
    
  },
};
