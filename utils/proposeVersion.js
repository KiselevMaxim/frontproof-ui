import { JsonRpcProvider } from 'ethers';

async function run() {

    // Connect to the Ethereum network
    const provider = new JsonRpcProvider("https://worldchain-sepolia.g.alchemy.com/v2/" + ALCHEMY_API_KEY);

    // Get block by number
    const blockNumber = "latest";
    const block = await provider.getBlock(blockNumber);

    console.log("current block #", block);
}

run();