const {expect} = require('chai')
const { hexStripZeros } = require('ethers/lib/utils')

describe("MyContract", function() {

    it("Should return correct name", async function (){
        //hre - allows us to get the actual class for the contract
        const MyContract = await hre.ethers.getContractFactory("MyContract")
        //instantiate contract by deploying it
        const myContractDeployed = await MyContract.deploy("MyContractName", "MCN")

        //await for the contract to be fully deployed
        await myContractDeployed.deployed()

        expect(await myContractDeployed.name()).to.equal("MyContractName")
        

    })
})