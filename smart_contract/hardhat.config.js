// https://eth-sepolia.g.alchemy.com/v2/8kGIpKB02_IVtiiiFMAemMObLZ-p_ScP

/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/8kGIpKB02_IVtiiiFMAemMObLZ-p_ScP",
      account: [
        "ffd5e8785b117e3344335bf052c48c1b5ba6ec33bd56c76d0ec018528233d870",
      ],
    },
  },
};
