const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("RFID", function(){
    it("Should return the default value of num", async function(){
        
        // first deploy the contract
        const RFID = await ethers.getContractFactory("RFID_Car");
        const rfid = await RFID.deploy();
        // wait for contract to get deployed
        await rfid.deployed();

        expect(await rfid.read_num()).to.equal(1);

    });

});