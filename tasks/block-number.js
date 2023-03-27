const { task } = require("hardhat/config");
const { ehterscan } = require("../hardhat.config");


task("block-number", "Prints the current block number")
    .setAction(
        async (tasksArgs, hre /* hardhat runtime enviornment provide all functionality of hardhat package*/) => {
            const blockNumber = await hre.ethers.provider.getBlockNumber();
            console.log(`current block number : ${blockNumber}`);
        }
);
module.exports = {};