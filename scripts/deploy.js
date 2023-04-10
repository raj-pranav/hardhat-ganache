const hre = require("hardhat")

async function main() {
    const RFID_Car = await hre.ethers.getContractFactory("RFID_Car");
    const contract = await RFID_Car.deploy();
    await contract.deployed();

    console.log(`Contract deployed to ${contract.address}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})