// import { useState } from "react";
// import { providers, ethers } from "ethers";
// import detectEthereumProvider from "@metamask/detect-provider";
// import { SwapWidget } from "@uniswap/widgets";
// const infuraId = process.env.REACT_APP_INFURA_ID;
// const jsonRpcEndpoint = `https://mainnet.infura.io/v3/${infuraId}`;
// const jsonRpcProvider = new providers.JsonRpcProvider(jsonRpcEndpoint);
// const provider = new ethers.providers.Web3Provider(jsonRpcProvider);
// export default function UniSwap() {
//   const [account, setAccount] = useState({
//     address: "",
//     provider: provider,
//   });
//   async function connectWallet() {
//     //check if Metamask is installed in the browser
//     const ethereumProvider = await detectEthereumProvider();
//     if (ethereumProvider) {
//       //prompt user to connect their wallet
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });
//       const address = accounts[0];
//       setAccount({
//         address: address,
//         provider: ethereumProvider,
//       });
//     }
//   }
//   return (
//     <>
//       <div className="Uniswap">
//         <SwapWidget
//           provider={account.provider}
//           JsonRpcEndpoint={jsonRpcEndpoint}
//         />
//       </div>
//     </>
//   );
// }\
// import React from "react";

// import { Theme, SwapWidget } from "@uniswap/widgets";

// // Define a custom theme to override default attributes
// const theme: Theme = {
//   borderRadius: 0,
//   fontFamily: '"Helvetica"',
// };

// function App() {
//   <div className="Uniswap">
//     <SwapWidget theme={theme} />
//   </div>;
// }
