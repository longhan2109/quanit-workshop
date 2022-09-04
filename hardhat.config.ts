import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { BSCTEST_RPC_URL, GOERLI_RPC_URL } from "./constants";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    bsctest: {
      url: BSCTEST_RPC_URL,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    goerli: {
      url: `${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${GOERLI_RPC_URL}${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.BSCSCAN_API_KEY,
  },
};

export default config;
