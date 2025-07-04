import { ethers, JsonRpcProvider } from 'ethers';

async function run() {
    const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
    const CID = process.env.CID;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;

    // Connect to the Ethereum network
    const provider = new JsonRpcProvider("https://worldchain-sepolia.g.alchemy.com/v2/" + ALCHEMY_API_KEY);

    // Get block by number
    const blockNumber = "latest";
    const block = await provider.getBlock(blockNumber);

    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    console.log("current block data", block);
    console.log("connected manager wallet", await wallet.getAddress());
    console.log("CID", CID);
}

run();