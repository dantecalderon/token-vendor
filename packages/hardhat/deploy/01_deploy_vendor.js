const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const YourContract = await ethers.getContract("YourToken", deployer);

  //Todo: deploy the vendor
  await deploy("Vendor", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: [YourContract.address],
    log: true,
  });

  //console.log("\n 🏵  Sending all 1000 tokens to the vendor...\n");
  //Todo: transfer the tokens to the vendor
  const Vendor = await ethers.getContract("Vendor", deployer);
  console.log("Vendor deployed at address: ", Vendor.address)

  const result = await YourContract.transfer(Vendor.address, ethers.utils.parseEther("500"));

  await Vendor.transferOwnership("0x124f0ED4c3BbFF888a932b1dF684bAa1cb082F05");


  // //const vendor = await deployments.get("Vendor");
  // //const result = await yourToken.transfer( vendor.address, utils.parseEther("1000") );

  // //console.log("\n 🤹  Sending ownership to frontend address...\n")
  // //ToDo: change address with your burner wallet address vvvv
  // //await vendor.transferOwnership( "0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1" );
};

module.exports.tags = ["Vendor"];
