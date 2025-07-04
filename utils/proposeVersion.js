import { ethers, JsonRpcProvider } from 'ethers';

async function run() {
    const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
    const CID = process.env.CID;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;
    const PROJECT_ID = process.env.PROJECT_ID;
    const VERSION_NAME = process.env.VERSION_NAME;
    const FRONT_PROOF_CONTRACT_ADDRESS = process.env.FRONT_PROOF_CONTRACT_ADDRESS; 

    // Connect to the Ethereum network
    const provider = new JsonRpcProvider("https://worldchain-sepolia.g.alchemy.com/v2/" + ALCHEMY_API_KEY);

    // Get block by number
    const blockNumber = "latest";
    const block = await provider.getBlock(blockNumber);

    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    console.log("current block data", block);
    console.log("connected manager wallet", await wallet.getAddress());
    console.log("CID", CID);

    const to = "0x..."; // Recipient address

    const abi = [
      "function proposeVersion(uint256 projectId,string memory cid,string memory comment)"
    ]

    const frontProof = new ethers.Contract(FRONT_PROOF_CONTRACT_ADDRESS, abi, wallet);
    await frontProof.proposeVersion(PROJECT_ID, CID, VERSION_NAME);
}

run();