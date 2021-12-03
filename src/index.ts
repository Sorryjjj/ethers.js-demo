import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-rinkeby.alchemyapi.io/v2/qy9lGE0QMJB7ploo68ulpNSFrIE97Gdz"
);
const ADDRESS = ""; // metamask 地址1
const ADDRESS_2 = ""; // 地址2

const PRIVATE_KEY = ""; // 导出私钥

const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

(async () => {
  //   const blockNum = await provider.getBlockNumber();
  //   console.log("blockNum: ", blockNum);
  //   const balance = await provider.getBalance(ADDRESS);
  //   console.log(`balance: ${ethers.utils.formatEther(balance)}`);

  //   const addr = await wallet.getAddress();
  //   console.log(addr);

  let tx: ethers.providers.TransactionRequest = {
    to: ADDRESS_2,
    // from: ADDRESS,
    value: ethers.utils.parseEther("0.1"),
    from: ADDRESS,
  };
  const balance = await wallet.getBalance();
  console.log("bal", ethers.utils.formatEther(balance));
  let txRes: ethers.providers.TransactionResponse =
    await wallet.sendTransaction(tx);
  console.log("txRes", txRes);
  let txReceipt = await txRes.wait();
  console.log("get transaction receipt: ", txReceipt);
})();
