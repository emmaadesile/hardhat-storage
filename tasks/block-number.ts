const { task } = require("hardhat/config");

export default task("block-number", "Prints the current block number").setAction(
    async (taskArgs: any[], hre: any) => {
        console.log(await hre.ethers.provider.getBlockNumber());
    }
);
