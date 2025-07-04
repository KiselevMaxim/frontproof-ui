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
    const walletAddress = await wallet.getAddress();

    console.log("current block data", block);
    console.log("connected manager wallet", walletAddress);
    console.log("CID", CID);

    const abi = [
      "function proposeVersion(uint256 projectId,string memory cid,string memory comment)"
    ]

    const frontProof = new ethers.Contract(FRONT_PROOF_CONTRACT_ADDRESS, abi, wallet);
    const estimatedGasLimit = 500000; //await frontProof.proposeVersion.estimateGas(PROJECT_ID, CID, VERSION_NAME);
    const txUnsigned = await frontProof.proposeVersion.populateTransaction(PROJECT_ID, CID, VERSION_NAME);
    
    txUnsigned.chainId = 11155111; // chainId 11155111 for Sepolia
    txUnsigned.gasLimit = estimatedGasLimit;
    //txUnsigned.gasPrice = await provider.getGasPrice();
    txUnsigned.nonce = await provider.getTransactionCount(walletAddress);

    console.log("txUnsigned", txUnsigned);

    const txSigned = await signer.signTransaction(txUnsigned);
    const submittedTx = await provider.sendTransaction(txSigned);
    const txReceipt = await submittedTx.wait();
    if (txReceipt.status === 0)
        throw new Error("proposeVersion transaction failed");

    console.log("proposeVersion successful!", tx);
}

run();