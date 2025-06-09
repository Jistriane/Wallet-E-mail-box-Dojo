require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.19",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    defaultNetwork: "sepolia",
    networks: {
        hardhat: {},
        sepolia: {
            url: process.env.SEPOLIA_URL,
            accounts: process.env.PRIVATE_KEY ? [(process.env.PRIVATE_KEY.startsWith('0x') ? process.env.PRIVATE_KEY : `0x${process.env.PRIVATE_KEY}`)] : [],
            chainId: 11155111,
            gasMultiplier: 1.2
        }
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    }
};