const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => {
        console.log(await hre.ethers.provider.getBlockNumber());
    }
);

module.exports = {};