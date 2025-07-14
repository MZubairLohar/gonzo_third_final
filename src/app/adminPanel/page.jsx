'use client';
import {  use, useCallback, useEffect, useState } from 'react';
import { createWallet } from "thirdweb/wallets";
import { client } from '../client';
import { PresaleAddress, PresaleABI } from '../lib/lib'; // Adjust the import path as necessary
import {  ConnectButton, useActiveAccount, useSendTransaction, darkTheme, useReadContract} from "thirdweb/react";
import { defineChain, getContract, prepareContractCall, readContract } from 'thirdweb';
import { ethereum } from 'thirdweb/chains';




  const ganacheChain = defineChain({
    id: 1337,
    rpc: "http://127.0.0.1:7545",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  });

  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];

export default function RunFunctions() {
  const account = useActiveAccount();
  const { mutate: sendTransaction, isPending } = useSendTransaction();
  const [currentPhase, setCurrentPhase] = useState(0)
  const [ether, setEther] = useState(0)
  const [price, setPrice] = useState(0);
  const [etherWorth, setEtherWorth] = useState(0);
  const [phaseData, setPhaseData] = useState({
    currentPhase: 0,
    phaseOne: 0,
    phaseTwo: 0,
    phaseThree: 0,
    phaseFour: 0,
    phaseFive: 0,
    phaseSix: 0,
    phaseSeven: 0,
    phaseEight: 0,
  });
  const [phase, setPhase] = useState({
      currentPhase: 0,
      phaseOne: 0,
      phaseTwo: 0,
      phaseThree: 0,
      phaseFour: 0,
      phaseFive: 0,
      phaseSix: 0,
      phaseSeven: 0,
      phaseEight: 0,
  });

  const fetchEthPrice = async () => {
    try {
    const res = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD");
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    const valueUSD = Math.round(data.USD)
    console.log("amount from Internet",data.USD, valueUSD);
    setPrice(valueUSD);
    
    } catch (error) {
    console.error("Error fetching price:", error);
    }
  };
  // data fetching from smart contract 
  const contract = getContract({
    address: PresaleAddress,
    contractAbi: PresaleABI,
    client,
    chain: ethereum,
    // chain: ganacheChain,
  });

  async function fetchPhaseData() {
    const data = await readContract({
      contract,
      method: "function saleDetailsOne() public view returns (uint, uint, uint, uint)",
      params: [],
    });
    console.log("Sale Details One:", data);

    // Convert last three values (assumed to be timestamps) to normal time format
    const formatTime = (timestamp) => {
      const date = new Date(Number(timestamp) * 1000);
      return date.toLocaleString();
    };

    setPhaseData(prev => ({
      ...prev,
      currentPhase: data[0],
      phaseOne: formatTime(data[1]),
      phaseTwo: formatTime(data[2]),
      phaseThree: formatTime(data[3]),
    }));

    setPhase(prev => ({
      ...prev,
      currentPhase: data[0],
      phaseOne: data[1],
      phaseTwo: data[2],
      phaseThree: data[3],
    }));
    

  }
  
  async function fetchPhaseData2() {
      const data = await readContract({
      contract,
      method: "function saleDetailsTwo() public view returns (uint,uint,uint,uint,uint)",
      params: [],
    })
    const data2 = await readContract({
      contract,
      method: "function TestingMap() public view returns(uint , uint)",
      params: [],
    })
    console.log("Sale Details Two:", data);
    console.log("current phase error:", data2);

     const formatTime = (timestamp) => {
      const date = new Date(Number(timestamp) * 1000);
      return date.toLocaleString();
    };
    setPhaseData(prev => ({
      ...prev,
      phaseFour: formatTime(data[0]),
      phaseFive: formatTime(data[1]),
      phaseSix: formatTime(data[2]),
      phaseSeven: formatTime(data[3]),
      phaseEight: formatTime(data[4])
    }));
    setPhase(prev => ({
      ...prev,
      phaseFour: data[0],
      phaseFive: data[1],
      phaseSix: data[2],
      phaseSeven: data[3],
      phaseEight: data[4]
    }));
    const now = Number(((Date.now())/1000).toFixed(0)) ; // current time in seconds
    console.log("All phases : ", phase);
    
    console.log("from currrent time", now);
    const difff = (now - (Number(phase.phaseTwo)))
    console.log("PHASES :",now , Number(data[2]), difff);
    if (  now < Number(phase.phaseOne) && now < Number(phase.phaseTwo)) {
      setCurrentPhase(1);
      console.log("one");
      
    }else if( now > Number(phase.phaseOne) && now < Number(phase.phaseTwo) ) {
      setCurrentPhase(2);
      console.log("Two");

    }else if(now > Number(phase.phaseTwo) && now < Number(phase.phaseThree) ) {
      setCurrentPhase(3);
      console.log("Three");
    }else if( now > Number(phase.phaseThree) &&  now < Number(phase.phaseFour) ){
      setCurrentPhase(4);
    }else if( now > Number(phase.phaseFour) &&  now < Number(phase.phaseFive) ){
      setCurrentPhase(5);
    }else if(now > Number(phase.phaseFive) && now < Number(phase.phaseSix) ){
      setCurrentPhase(6);
    }else if(now > Number(phase.phaseSix) &&  now < Number(phase.phaseSeven) ){
      setCurrentPhase(7);
    }else if(now > Number(phase.phaseSeven) &&  now < Number(phase.phaseEight)){
      setCurrentPhase(8);
    }

  }  
  async function fetchPhaseData3() {
      const data = await readContract({
      contract,
      method: "function saleDetailsThree() public view returns(uint, uint)",
      params: [],
    })
    console.log("Sale Details Three:", data);
    const etherAmount = (Number(data[0]))/10**18
    setEther(etherAmount)
    console.log("ether prices:", price);
    
    const worth = etherAmount*price;
    setEtherWorth(worth);
  }  

  // async function fetchApprove() {
  //     const ad = account?.address

  //      const data = await readContract({
  //         contract,
  //         method: "function allowance(address owner, address spender) public view returns (uint256)",
  //         params: [ad , PresaleAddress],
  //       });

  //       console.log("Approved : ",(data).toString());
        
  //       //  if (!transaction) {
  //       //   console.error("Transaction preparation failed");
  //       //   return;
  //       // }

  //       // sendTransaction(transaction, {
  //       //   onSuccess: (result) => {
  //       //     console.log("✅ Transaction confirmed:", result);
  //       //     alert("Transaction Successful!");
  //       //   },
  //       //   onError: (error) => {
  //       //     console.error("❌ Transaction error:", error);
  //       //     alert("Transaction Failed!");
  //       //   },
  //       // });
  // }

  useEffect(() => {
    if(account) {
      async function run(){
        await fetchEthPrice();
        await fetchPhaseData();
        await fetchPhaseData2();
        await fetchPhaseData3()
        // await fetchApprove();
      }
      run();
    }
  }, [account,price]);

  useEffect(()=>{
      console.log("this is currentPhase:", currentPhase)
       console.log("Phase has updated to:", currentPhase, phase);
    const now = Number(((Date.now())/1000).toFixed(0)) ; // current time in seconds
    if(phase.phaseOne > 1){
        if (  now < Number(phase.phaseOne) && now < Number(phase.phaseTwo)) {
      setCurrentPhase(1);
        }else if( now > Number(phase.phaseOne) && now < Number(phase.phaseTwo) ) {
          setCurrentPhase(2);
        }else if(now > Number(phase.phaseTwo) && now < Number(phase.phaseThree) ) {
          setCurrentPhase(3);
        }else if( now > Number(phase.phaseThree) &&  now < Number(phase.phaseFour) ){
          setCurrentPhase(4);
        }else if( now > Number(phase.phaseFour) &&  now < Number(phase.phaseFive) ){
          setCurrentPhase(5);
        }else if(now > Number(phase.phaseFive) && now < Number(phase.phaseSix) ){
          setCurrentPhase(6);
        }else if(now > Number(phase.phaseSix) &&  now < Number(phase.phaseSeven) ){
          setCurrentPhase(7);
        }else if(now > Number(phase.phaseSeven) &&  now < Number(phase.phaseEight)){
          setCurrentPhase(8);
        }
    }
  },[currentPhase,phase])
  
  useEffect(()=>{

  },[phase,ether,etherWorth,phaseData])

  const handleStart = async () => {
      if (!account) {
        console.error("No active account connected");
        alert("Please connect your wallet first!");
        return;
      }

      console.log("clicked ");
      console.log("Presale Address:", PresaleAddress);

      try {
        const contract = getContract({
          address: PresaleAddress,
          contractAbi: PresaleABI,
          client: client,
          chain: ethereum,
          // chain: ganacheChain,
        });

        const transaction = prepareContractCall({
          contract,
          method: "function Start()",
          params: [],
        });

        if (!transaction) {
          console.error("Transaction preparation failed");
          return;
        }

        sendTransaction(transaction, {
          onSuccess: (result) => {
            console.log("✅ Transaction confirmed:", result);
            alert("Transaction Successful!");
          },
          onError: (error) => {
            console.error("❌ Transaction error:", error);
            alert("Transaction Failed!");
          },
        });
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred!");
      }
  };


  const handleApprove = async () => {
      if (!account) {
        console.error("No active account connected");
        alert("Please connect your wallet first!");
        return;
      }
      const ad = account?.address
      console.log("clicked ");
      console.log("Presale Address:", PresaleAddress);

      try {
        const contract = getContract({
          address: PresaleAddress,
          contractAbi: PresaleABI,
          client: client,
          chain: ethereum,
          // chain: ganacheChain,
        });

          const data = await readContract({
            contract,
            method: "function saleDetailsThree() public view returns(uint, uint)",
            params: [],
          })

          console.log("amount to be aprroved ",data[1]);
          const dat = (data[1]).toString()

        const transaction = prepareContractCall({
          contract,
          method: "function approve( address spender, uint256 value )",
          params: [PresaleAddress, dat],
        });

        if (!transaction) {
          console.error("Transaction preparation failed");
          return;
        }

        sendTransaction(transaction, {
          onSuccess: (result) => {
            console.log("✅ Transaction confirmed:", result);
            alert("Transaction Successful!");
          },
          onError: (error) => {
            console.error("❌ Transaction error:", error);
            alert("Transaction Failed!");
          },
        });

       



      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred!");
      }
  };


  const isSameMinute = (timeStr) => {
    if (!timeStr || isNaN(Date.parse(timeStr))) return false;

    const now = new Date();
    const phaseTime = new Date(timeStr);

    return (
      now.getHours() === phaseTime.getHours() &&
      now.getMinutes() === phaseTime.getMinutes()
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        background: "linear-gradient(135deg, #0f1021 0%, #1a1a2e 50%, #23235b 100%)",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div className="max-w-lg mx-auto mt-10 bg-gradient-to-br from-[#23235b]  via-[#1a1a2e] to-[#18182f] rounded-2xl shadow-2xl border-t-4 border-[#f8b447] p-6 md:p-8 text-white relative overflow-hidden flex flex-col items-center">
        {/* Edge effect */}
        <div className="absolute inset-0 border-2 border-[#a62122] rounded-2xl opacity-20 pointer-events-none z-0" />

        {/* Phase Details */}
        <div className="relative z-10 mb-6 items-center space-y-1 flex flex-col w-full">
          <h2 className="text-2xl font-bold text-[#f8b447] text-center">Admin Panel Presale Details</h2>
          <div className='px-4 py-2 bg-[#a62122] rounded-full shadow-lg'>
            <p className="text-md text-white text-center">Earned: <a className='font-bold text-lg'>{ether} </a> ETH</p>
            <p className="text-md text-slate-200 text-center"> $<a className='font-bold'>{etherWorth}</a></p>

          </div>
          
          <p className="text-sm text-[#f8a847] text-center">Current Phase: {currentPhase}</p>
          {/* Add more phases as needed */}
          
          <div className="grid grid-cols-2 gap-6 mt-2 w-full">

            <div className="items-left mx-4 flex flex-col items-center">
              {["phaseOne", "phaseTwo", "phaseThree", "phaseFour"].map((key, idx) => {
                const timeStr = phaseData[key];
                const time = timeStr && !isNaN(Date.parse(timeStr)) ? new Date(timeStr).getTime() : null;
                const now = Date.now();

                const isPassed = time && time < now;
                const isCurrent = isSameMinute(timeStr);

                return (
                  <p
                    key={key}
                    className={`text-sm border rounded px-2 py-1 mb-1 text-center 
                      ${isCurrent ? "bg-green-600 text-white border-green-700" : ""}
                      ${isPassed && !isCurrent ? "line-through border-red-500 opacity-60 text-[#f8a847]" : ""}
                      ${!isPassed && !isCurrent ? "border-[#f8a847] text-[#f8a847]" : ""}
                    `}
                  >
                    {`Phase ${idx + 1}: ${timeStr || "--"}`}
                  </p>
                );
              })}
            </div>
            
            <div className="items-left mx-4 flex flex-col items-center">
              {["phaseFive", "phaseSix", "phaseSeven", "phaseEight"].map((key, idx) => {
                const timeStr = phaseData[key];
                const time = timeStr && !isNaN(Date.parse(timeStr)) ? new Date(timeStr).getTime() : null;
                const now = Date.now();

                const isPassed = time && time < now;
                const isCurrent = isSameMinute(timeStr);

                return (
                  <p
                    key={key}
                    className={`text-sm border rounded px-2 py-1 mb-1 text-center 
                      ${ isCurrent ? "bg-green-600 text-white border-green-700" : ""}
                      ${isPassed && !isCurrent ? "line-through border-red-500 opacity-60 text-[#f8a847]" : ""}
                      ${!isPassed && !isCurrent ? "border-[#f8a847] text-[#f8a847]" : ""}
                    `}
                  >
                    {`Phase ${idx + 1}: ${timeStr || "--"}`}
                  </p>
                );
              })}
            </div>

          </div>
        </div>

        {/* Input and Buttons */}
        <div className="relative z-10 space-y-4 flex flex-col items-center w-full">
          <ConnectButton
            client={client}
            // chain={ganacheChain}
            chain={ethereum}
            account={account}
            showBalance={true}
            showWalletSwitch={true}
            showChainSwitch={true}
            walletSwitch={{ label: "Switch Wallet" }}
            chainSwitch={{ label: "Switch Chain" }}
            accountButton={{ label: "Account" }}
            disconnectButton={{ label: "Disconnect" }}
            connectButton={{ label: "Connect Wallet" }}
            connectModal={{
              showThirdwebBranding: false,
              size: "compact",
              title: "Connect Wallet",
            }}
            theme={darkTheme({
              colors: {
                danger: "hsl(360, 67%, 39%)",
                modalBg: "hsl(260, 60%, 18%)",
                separatorLine: "hsl(0, 100%, 100%)",
                borderColor: "hsl(228, 12%, 82%)",
                accentText: "hsl(35, 93%, 63%)",
                tertiaryBg: "hsl(260, 60%, 18%)",
                skeletonBg: "hsl(230, 32%, 50%)",
                secondaryText: "hsl(0, 36%, 96%)",
                tooltipBg: "hsl(240, 18%, 83%)",
                primaryButtonBg: "hsl(35, 93%, 63%)",
                primaryButtonText: "hsl(359, 67%, 41%)",
                secondaryButtonBg: "hsl(359, 67%, 41%)",
                secondaryButtonText: "hsl(35, 93%, 63%)",
              },
            })}
            wallets={wallets}
            style={{
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto',
            }}
          />

          <button
            onClick={async () => { await handleStart() }}
            className="w-full py-3 font-bold rounded-lg bg-gradient-to-r from-[#f8b447] to-[#f8a847] text-[#a62122] hover:scale-105 transition-transform"
          >
            {isPending ? 'Processing...' : 'Start Presale'}
          </button>

           {/* <button
            onClick={async () => { await handleApprove() }}
            className="w-full py-3 font-bold rounded-lg bg-gradient-to-r from-[#f8b447] to-[#f8a847] text-[#a62122] hover:scale-105 transition-transform"
          >
            {isPending ? 'Processing...' : 'Approve to sell'}
          </button> */}

          
        </div>
      </div>
    </div>
  );
}
