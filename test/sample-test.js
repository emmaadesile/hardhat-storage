const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage;

    beforeEach(async () => {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    });

    it("Should start with a favorite number of 0", async () => {
        const currentValue = await simpleStorage.retrieve();
        expect(currentValue.toString()).to.equal("0");
    });

    it("Should update the favorite number after calling store function", async () => {
        await simpleStorage.store(7);
        const updatedValue = await simpleStorage.retrieve();

        expect(updatedValue.toString()).to.equal("7");
    });

    it("add a person and their favorite number", async () => {
        const transactionResponse = await simpleStorage.addPerson(
            "Mayweather",
            9
        );
    });
});
