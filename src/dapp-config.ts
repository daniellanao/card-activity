import { Mainnet, Goerli } from '@usedapp/core';

export const dappConfig = {
    autoConnect: false,
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: `https://eth-mainnet.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_ETHEREUM_KEY}`,
        [Goerli.chainId]: `https://eth-goerli.g.alchemy.com/v2/${process.env.REACT_APP_GOERLI_ETHEREUM_KEY}`,
    },
};
