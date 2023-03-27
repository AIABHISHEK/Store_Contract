// 
const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("Simp-Store", function () {

  let contractFactory;
  let contract;
  beforeEach(async function () {
    contractFactory = await ethers.getContractFactory("myContract");

     contract = await contractFactory.deploy();
  }); // before each it() what t done

  it("It should have number equal to 0", async function () {
    const currentValue = await contract.getMyNumber();
    const expectedValue = "0";
    //assert 
    //assert
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Update the number", async function () {
    const expectedValue = "1";
    const transactionResponse = await contract.store(expectedValue);
    await transactionResponse.wait(1);
    const updatedValue = await contract.getMyNumber();
    assert.equal(expectedValue, updatedValue.toString());
  })
});

