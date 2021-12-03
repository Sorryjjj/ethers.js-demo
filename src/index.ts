import { ethers } from "ethers";

// https://www.alchemy.com/ 创建一个rinkeby测试
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-rinkeby.alchemyapi.io/v2/......."
);
const ADDRESS = ""; // metamask 地址1
const ADDRESS_2 = ""; // 地址2

const PRIVATE_KEY = ""; // 导出私钥

// 连接钱包
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

(async () => {
  // 获取区块高度
  //   const blockNum = await provider.getBlockNumber();
  //   console.log("blockNum: ", blockNum);
  // 获取账户余额
  //   const balance = await provider.getBalance(ADDRESS);
  //   console.log(`balance: ${ethers.utils.formatEther(balance)}`);
  // 获取钱包地址
  //   const addr = await wallet.getAddress();
  //   console.log(addr);

  // 创建交易
  let tx: ethers.providers.TransactionRequest = {
    to: ADDRESS_2,
    value: ethers.utils.parseEther("0.1"),
    from: ADDRESS,
  };

  // 获取钱包余额
  const balance = await wallet.getBalance();
  console.log("bal", ethers.utils.formatEther(balance));

  // 发送交易
  let txRes: ethers.providers.TransactionResponse =
    await wallet.sendTransaction(tx);
  console.log("txRes", txRes);

  // 上链后的交易数据
  let txReceipt = await txRes.wait();
  console.log("get transaction receipt: ", txReceipt);
})();
