const {assert, expect} = require("chai");
const {ethers} = require("hardhat");

describe("RFID", function(){
    beforeEach(async function(){
         // first deploy the contract
        const RFID = await ethers.getContractFactory("RFID_Car");
        const rfid = await RFID.deploy();
        // wait for contract to get deployed
        contract = await rfid.deployed();
        console.log(`Contract deloyed at ${contract.address}`);
    });

    it("Should return the default value of num", async function(){
        const st_var = await contract.read_num();
        // console.log(`Value of state variable num: ${st_var}`)
        expect(st_var).to.equal(0);
    });

    it("Should update the new value of num", async function(){
        await contract.update_num(1);
        expect(await contract.read_num()).to.equal(1, "Value not updated");
    });

});