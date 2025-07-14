"use client";
import React, { useEffect, useState  } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../componant/Navbar';
import { ConnectButton, useActiveAccount, useSendTransaction } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client } from '../client';
import { defineChain, getContract, prepareContractCall, readContract } from 'thirdweb';
import { PresaleAddress,PresaleABI } from '../lib/lib';
import { ethers } from 'ethers';
import { ethereum } from 'thirdweb/chains';
// import { useRouter } from 'next/router';



  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];

   const ganacheChain = defineChain({
    id: 1337,
    rpc: "http://127.0.0.1:7545",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  });
  
  
  export default function Trade() {
  const [value2, setValue] = useState();
  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [wihdrawnAmount, setWihdrawnAmount] = useState(0); // Add this for manual re-renders
  const [withdrawalWeek, setWithdrawalWeek] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(null)
  const [receiveable,setReceiveable] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  const account = useActiveAccount();
  const [etherWorth, setEtherWorth] = useState(0);
  const [showWithdrawal, setShowWithdrawal] = useState(false)
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
  const [countdown, setCountdown] = useState("")
  const { mutate: sendTransaction, isPending } = useSendTransaction();
  

  const fetchEthPrice = async () => {
    try {
    const res = await fetch("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD");
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    const valueUSD = Math.round(data.USD)
    // console.log("amount from Internet",data.USD, valueUSD);
    setPrice(valueUSD);
    
    } catch (error) {
    console.error("Error fetching price:", error);
    }
  };

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
    // console.log("Sale Details One:", (data[0]).toString());

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
    console.log("from currrent time", now);
    console.log("PHASES :",now , Number(data[2]), (now- (Number(phase.phaseTwo))));
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
    }else if(now > Number(phase.phaseEight)){
      setCurrentPhase(9);
    }
                
  }  

  async function fetchUserData1() {
    const data = await readContract({
      contract,
      method: "function userDetails(address _user) public view returns(address, uint,uint,uint,uint, uint)",
      params: [account?.address],
    })
    setValue(Number(data[1])/10**18)
  }

  async function fetchUserData2() {
    const data = await readContract({
      contract,
      method: "function userDetailsTwo(address _user) public view returns(uint,uint)",
      params: [account?.address],
    })
    const now = Number(((Date.now())/1000).toFixed(0)) ; // current time in seconds
    const dat= Number(data[0])
    setWihdrawnAmount((String(data[1]))/10**18);

    if( now > Number(phase.phaseFour) &&  now < Number(phase.phaseFive) ){
      setWithdrawalWeek(5);
      if(Number(data[0]) > Number(phase.phaseFour) &&  Number(data[0]) < Number(phase.phaseFive) ){
        setShowWithdrawal(false);
        console.log("5th week false");

      }else {
        setShowWithdrawal(true);
        console.log("5th week true");
      }
    }else if(now > Number(phase.phaseFive) && now < Number(phase.phaseSix) ){
      setWithdrawalWeek(6);
      if(Number(data[0]) > Number(phase.phaseFive) && Number(data[0]) < Number(phase.phaseSix)){
        console.log("6th week");
        setShowWithdrawal(false);
      }else{
        setShowWithdrawal(true);
        console.log("6th week true");
      }
    }else if(now > Number(phase.phaseSix) &&  now < Number(phase.phaseSeven) ){
      setWithdrawalWeek(7);
      if(Number(data[0]) > Number(phase.phaseSix) &&  Number(data[0]) < Number(phase.phaseSeven) ){
        setShowWithdrawal(false);
      }else {
        setShowWithdrawal(true);
      }
    }else if(now > Number(phase.phaseSeven) &&  now < Number(phase.phaseEight)){
      setWithdrawalWeek(8);
      if(Number(data[0]) > Number(phase.phaseSeven) &&  Number(data[0]) < Number(phase.phaseEight)){
        setShowWithdrawal(false);
      }else{
        setShowWithdrawal(true);
      }
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
    console.log("ether prices:", price);
    
    const worth = etherAmount*price;
    setEtherWorth(worth);
  }
  async function  getBalance() {
    const data = await readContract({
      contract,
      method: "function balanceOf(address account) public view returns (uint256)",
      params: [account?.address],
    })
    const dat = (Number(data)/10**18).toFixed(2)
    console.log("user Balance:", Number(dat));
    setUserBalance(Number(dat))
  }

  useEffect(() => {
    if(account) {
      async function run(){
        await fetchPhaseData();
        await fetchPhaseData2();
        await fetchUserData1();
        await fetchUserData2();
        await fetchPhaseData3();
        await fetchEthPrice();
        await getBalance();
      }
      run();
    }
  }, [account,wihdrawnAmount,etherWorth,price]);

  useEffect(()=>{
      console.log("this is current phase:", currentPhase)

      if(salePrice == 0 ){
        if(currentPhase == 1){
          setSalePrice(2)
        }else if(currentPhase == 2){
          setSalePrice(1.75)
        }else if(currentPhase == 3){
          setSalePrice(1.5)
        }else if(currentPhase == 4){
          setSalePrice(1.25)
        }
      }
      console.log("this is Sale peice:", salePrice)
      let SalePrice = 0 ;
      if(salePrice == 2){
        SalePrice = 2;
      }else if(salePrice == 1.75){
        SalePrice = 1.75;
      }else if(salePrice == 1.5){
        SalePrice = 1.5;
      }else if(salePrice == 1.25){
        SalePrice = 1.25;
      }
      console.log("SalePrice: ",SalePrice);

      console.log(inputValue,price,SalePrice);
      const rawValue = Number(inputValue) * Number(price) * Number(SalePrice);
      if (isNaN(rawValue)) {
        throw new Error("Invalid input: inputValue, price, or SalePrice is not a number.");
      }
      const amt2 = rawValue.toString();
      console.log("checking fixed amount:", amt2);
      const amt4 = ethers.parseUnits(amt2,18);
      
      const amt5 = (amt4).toString()

      console.log("NOW Final : ", amt2, amt5);
      setReceiveable(amt2)
  },[inputValue,price,salePrice, currentPhase])

  // useEffect(() => {
  //   console.log("Phase has updated to:", currentPhase, phase);
  //   const now = Number(((Date.now())/1000).toFixed(0)) ; // current time in seconds
  //   if(phase.phaseOne > 1){
  //       if (  now < Number(phase.phaseOne) && now < Number(phase.phaseTwo)) {
  //         setCurrentPhase(1);
  //       }else if( now > Number(phase.phaseOne) && now < Number(phase.phaseTwo) ) {
  //         setCurrentPhase(2);
  //       }else if(now > Number(phase.phaseTwo) && now < Number(phase.phaseThree) ) {
  //         setCurrentPhase(3);
  //       }else if( now > Number(phase.phaseThree) &&  now < Number(phase.phaseFour) ){
  //         setCurrentPhase(4);
  //       }else if( now > Number(phase.phaseFour) &&  now < Number(phase.phaseFive) ){
  //         setCurrentPhase(5);
  //       }else if(now > Number(phase.phaseFive) && now < Number(phase.phaseSix) ){
  //         setCurrentPhase(6);
  //       }else if(now > Number(phase.phaseSix) &&  now < Number(phase.phaseSeven) ){
  //         setCurrentPhase(7);
  //       }else if(now > Number(phase.phaseSeven) &&  now < Number(phase.phaseEight)){
  //         setCurrentPhase(8);
  //       }
  //   }
  // }, [currentPhase, phase, showWithdrawal]);

  useEffect(() => {
  console.log("Phase has updated to:", currentPhase, phase);

  const now = Math.floor(Date.now() / 1000); // current time in seconds

  if (phase.phaseOne > 1) {
    let nextPhaseTime;

    if (now < Number(phase.phaseOne)) {
      setCurrentPhase(1);
      nextPhaseTime = Number(phase.phaseOne);
    } else if (now < Number(phase.phaseTwo)) {
      setCurrentPhase(2);
      nextPhaseTime = Number(phase.phaseTwo);
    } else if (now < Number(phase.phaseThree)) {
      setCurrentPhase(3);
      nextPhaseTime = Number(phase.phaseThree);
    } else if (now < Number(phase.phaseFour)) {
      setCurrentPhase(4);
      nextPhaseTime = Number(phase.phaseFour);
    } else if (now < Number(phase.phaseFive)) {
      setCurrentPhase(5);
      nextPhaseTime = Number(phase.phaseFive);
    } else if (now < Number(phase.phaseSix)) {
      setCurrentPhase(6);
      nextPhaseTime = Number(phase.phaseSix);
    } else if (now < Number(phase.phaseSeven)) {
      setCurrentPhase(7);
      nextPhaseTime = Number(phase.phaseSeven);
    } else if (now < Number(phase.phaseEight)) {
      setCurrentPhase(8);
      nextPhaseTime = Number(phase.phaseEight);
    }

    // Countdown timer setup
    if (nextPhaseTime) {
      const interval = setInterval(() => {
        const now = Math.floor(Date.now() / 1000);
        const diff = nextPhaseTime - now;

        if (diff <= 0) {
          clearInterval(interval);
          setCountdown("⏰ Next phase starting...");
        } else {
          const hours = Math.floor(diff / 3600);
          const minutes = Math.floor((diff % 3600) / 60);
          const seconds = diff % 60;

          setCountdown(
            `${hours}h ${minutes}m ${seconds}s`
          );
        }
      }, 1000);

      return () => clearInterval(interval); // Clean up on unmount or dependency change
    }
  }
}, [currentPhase, phase, showWithdrawal]);

  useEffect(()=>{
    console.log("log");
    
  },[wihdrawnAmount, value2, userBalance,showWithdrawal])



  const handleBuy = async () =>{

    const amount = BigInt(Math.floor(parseFloat(inputValue) * 10 ** 18)); // 1.5 → 1500000000000000000

    console.log("this is Sale peice:", salePrice)
      let SalePrice = 0 ;
      if(salePrice == 2){
        SalePrice = 2;
      }else if(salePrice == 1.75){
        SalePrice = 1.75;
      }else if(salePrice == 1.5){
        SalePrice = 1.5;
      }else if(salePrice == 1.25){
        SalePrice = 1.25;
      }
      console.log("SalePrice: ",SalePrice);

      console.log(inputValue,price,SalePrice);
      const rawValue = Number(inputValue) * Number(price) * Number(SalePrice);
      if (isNaN(rawValue)) {
        throw new Error("Invalid input: inputValue, price, or SalePrice is not a number.");
      }
      const amt2 = rawValue.toString();
      console.log("checking fixed amount:", amt2);
      const amt4 = ethers.parseUnits(amt2,18);
      
      const amt5 = (amt4).toString()

      console.log("NOW Final : ", amt2, amt5);
    if (!inputValue || inputValue < 0.25 || inputValue > 200) {
      alert("Error ❌ Please enter a valid amount between 0.25 and 200 ETH.");
      console.log("input value:", inputValue);

      return;
    }
    try {
        const transaction = prepareContractCall({
            contract,
            method: "function Buy(uint _tokenAmount)",
            params: [amt5],
            value: amount
          });
      if (!transaction) {
        console.error("Transaction preparation failed");
        return;
      }

      sendTransaction(transaction, {
        onSuccess: (result) => {
          console.log("✅ Transaction confirmed:", result);
          alert("Transaction Successful!");
          // router.reload();
        },
        onError: (error) => {
          console.error("❌ Transaction error:", error);
          alert("Transaction Failed!");
        },
      });

      // alert(`Purchase successful! You bought ${inputValue} ETH worth of tokens.`);
    } catch (error) {
      console.error(error);
      alert("Transaction failed. Please try again.");
    }
  } 

  const handleWithdraw = async () =>{
      try {
        const add = account?.address;
        console.log("withdrawal clicked",add);
        const transaction = prepareContractCall({
          contract,
          method: "function withdrawal(address _user, uint _percent)",
          params: [add,4]
        });
      if (!transaction) {
        console.error("Transaction preparation failed");
        return;
      }

      sendTransaction(transaction, {
        onSuccess: (result) => {
          console.log("✅ Transaction confirmed:", result);
          alert("Transaction Successful!");
          // router.reload();
          setShowWithdrawal(false)
        },
        onError: (error) => {
          console.error("❌ Transaction error:", error);
          alert("Transaction Failed!");
        },
      });

    } catch (error) {
      console.error(error);
      alert("Transaction failed. Please try again.");
    }
  }


  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] '>
      <Navbar />
      <div className="container mx-auto px-4 py-20 items-center justify-center">
          {/* Purchase Card - 3D Styled */}
            <div className="max-w-md mx-auto items-center justify-center transform transition-all hover:scale-[1.01]">
                <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl shadow-2xl overflow-hidden border-t-2 border-[#f8b447]">
                    {/* 3D Edge Effect */}
                    <div className="absolute inset-0 border-2 border-[#a62122] rounded-xl pointer-events-none opacity-30"></div>
                    
                    {/* Card Content */}
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#f8b447] to-[#f8d447]">
                            TOKEN SALE
                        </h2>
                        <div className='text-[#f8b447] text-center mb-4 -mt-2'>Total Sales: $<a className='font-bold'>{etherWorth}</a></div>
                        {/* Week Indicator */}
                        
                        <div className="flex justify-center mb-6">
                            <div className="px-4 py-2 bg-[#a62122] rounded-full shadow-lg">
                                <span className="font-bold text-[#f8b447]">
                                    {(currentPhase) ? 
                                    <div>
                                      {
                                        (currentPhase > 0 && currentPhase < 5 ) ?
                                        `WEEK ${currentPhase}` 
                                        :
                                        <div>PRESALE ENDED 
                                          <div>
                                            { (currentPhase > 4 && currentPhase < 9 ) ?
                                            <div>CURRENT WEEK {currentPhase}</div> :
                                            <> </>
                                            }
                                          </div>
                                        </div>
                                      }

                                    </div>
                                    : 
                                    'PRESALE NOT STARTED'}
                                </span>
                            </div>
                        </div>
                        <div> {
                          (currentPhase > 0 && currentPhase < 9 ) ?
                          <div className='text-[#a62122]'> Next Phase Starts in <a className='text-slate-300 '>{countdown}</a> </div>
                          :
                          <div></div>  
                        } </div>
                        {/* Token Calculation */}
                        <div className="bg-[#161622] rounded-lg p-4 mb-6 border border-[#f8b447]/20">
                            { (currentPhase > 4) ? 
                            <>
                              <p className="text-center text-gray-300">
                                  Your Balance
                              </p>
                              <p className="text-center text-2xl font-bold text-[#f8b447] mt-1">
                                {/* {receiveable ? (receiveable).toFixed(2) : '0.00'} GONZOs */}
                                {userBalance ? (userBalance) : '0.00'} GONZOs
                              </p>
                            </>
                              :
                              <>
                                 <p className="text-center text-gray-300">
                                  You will receive
                                </p>
                                <p className="text-center text-2xl font-bold text-[#f8b447] mt-1">
                                    {/* {receiveable ? (receiveable).toFixed(2) : '0.00'} GONZOs */}
                                    {(receiveable) ? (receiveable) : '0.00'} GONZOs
                                </p>
                              </>


                            }
                        </div>
                       
                        {
                          account ? (
                            <>
                              { (currentPhase < 5 ) ?
                                <>
                                  {/* Input Field */}
                                  <div className="mb-6">
                                      <div className="relative">
                                            <input
                                              type="number"
                                              name="amount"
                                              id="amount"
                                              onChange={(e) => setInputValue(e.target.value)}
                                              required
                                              min="0.25"
                                              max="200"
                                              step="0.01"
                                              className="w-full bg-[#0f0f1a] border-2 border-[#a62122]/50 focus:border-[#f8b447] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f8b447]/30 text-center font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                              <span className="text-gray-400">ETH</span>
                                          </div>
                                      </div>
                                      <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
                                          <span>Min: 0.25 ETH</span>
                                          <span>Max: 200 ETH</span>
                                      </div>
                                  </div>
                                  
                                  {/* Action Buttons */}
                                  <div className="flex gap-6 px-2 justify-center">
                                    <div>
                                      <button
                                          type="button"
                                          onClick={handleBuy}
                                          className="w-full bg-gradient-to-r from-[#f8b447] to-[#f8a847] hover:from-[#f8a847] hover:to-[#f89d47] text-[#a62122] font-extrabold py-3 px-4 rounded-lg shadow-lg transform transition-all hover:scale-[1.02] active:scale-[0.98] border-2 border-[#f8b447]/50"
                                      >
                                          BUY TOKENS
                                      </button>
                                    </div>
                                    <div className=''>
                                          <ConnectButton
                                            client={client}
                                            connectButton={{ label: "Connect Wallet" }}
                                            connectModal={{
                                              showThirdwebBranding: false,
                                              size: "compact",
                                              title: "Connect Wallet",
                                            }}
                                            theme={darkTheme({
                                              colors: {
                                                danger: "hsl(360, 67%, 39%)",
                                                modalBg: "hsl(360, 67%, 39%)",
                                                separatorLine: "hsl(0, 100%, 100%)",
                                                borderColor: "hsl(228, 12%, 82%)",
                                                accentText: "hsl(35, 93%, 63%)",
                                                tertiaryBg: "hsl(35, 93%, 63%)",
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
                                          />
                                    </div>
                                  </div>
                                </>
                                :
                                <div className='justify-center items-center text-lg font-bold '> </div>
                              }
                            </>
                        ) : (
                          <div className='ml-[22%] mr-[30%] md:ml-[29%] md:mr-[30%] lg:ml-[30%] lg:mr-[30%]'>
                            <ConnectButton
                                client={client}
                                connectButton={{ label: "Connect Wallet" }}
                                connectModal={{
                                  showThirdwebBranding: false,
                                  size: "compact",
                                  title: "Connect Wallet",
                                }}
                                theme={darkTheme({
                                  colors: {
                                    danger: "hsl(360, 67%, 39%)",
                                    modalBg: "hsl(360, 67%, 39%)",
                                    separatorLine: "hsl(0, 100%, 100%)",
                                    borderColor: "hsl(228, 12%, 82%)",
                                    accentText: "hsl(35, 93%, 63%)",
                                    tertiaryBg: "hsl(35, 93%, 63%)",
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
                              />
                          </div>
                        )}
                    </div>
                </div>
            </div>

          
          {/* Purchase History Section */}
          {account && (
              <div className="max-w-md mx-auto mt-10 transform transition-all hover:scale-[1.01] items-center justify-center">
                  <div className="relative bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] rounded-xl shadow-2xl overflow-hidden border-t-2 border-[#f8b447]">
                      {/* 3D Edge Effect */}
                      <div className="absolute inset-0 border-2 border-[#a62122] rounded-xl pointer-events-none opacity-30"></div>
                      
                      <div className="p-6 md:p-8">
                          <h2 className="text-xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#f8b447] to-[#f8d447]">
                              YOUR PURCHASES
                          </h2>
                          
                          {value2 > 0 ? (
                             (showWithdrawal ?
                              <div className="items-center justify-center">
                                 
                                  <div className="grid grid-cols-4 gap-4 items-center bg-[#161622]/80 rounded-lg p-3 border border-[#a62122]/30 justify-center">
                                   
                                    <div className="flex flex-col text-gray-300 border space-y-4 space-x-1 rounded-lg text-center py-1">
                                      <div className='text-[8px] md:text-xs lg:text-xs  text-center -mb-2 mt-1 font-medium'>
                                        Last Week
                                      </div>
                                      <div className='text-sm text-[#f8b447] '>
                                        {withdrawalWeek}
                                      </div>
                                    </div>

                                    <div className="flex flex-col  border rounded-lg text-center space-y-4 space-x-1 text-gray-300 py-1">
                                      <div className='text-[8px] md:text-xs lg:text-xs  text-center -mb-2 mt-1 font-medium '>
                                        Redeemable  
                                      </div>
                                      <div className=' text-sm text-[#f8b447] '>
                                        {(wihdrawnAmount).toFixed(2)}
                                      </div>
                                    </div>

                                    <div className="flex flex-col border rounded-lg space-y-4 space-x-1 text-center py-1">
                                      <div className='text-[8px] md:text-xs lg:text-xs  text-center -mb-2 mt-1 font-medium text-gray-300'>
                                        Purchased
                                      </div>
                                      <div className=" text-sm text-center text-[#f8b447]  ">
                                        { (value2).toFixed(2)  }
                                      </div>
                                    </div>

                                    <div className=" items-center justify-center ">
                                    {
                                      showWithdrawal?
                                        <button 
                                          className="bg-gradient-to-r from-[#f8b447] to-[#f8a847] hover:from-[#f8a847] hover:to-[#f89d47] text-[#a62122] space-y-4 space-x-1 font-bold py-5 rounded-lg text-[6px] md:text-[8px] lg:text-xs shadow transform transition-all hover:scale-[1.02] w-full"
                                          onClick={handleWithdraw}
                                          >
                                            WITHDRAW
                                        </button>
                                      :
                                      <></>
                                    }
                                    </div>
                                  </div>
                              </div>
                              :
                              <div className="items-center justify-center">
                                 
                                  <div className="grid grid-cols-3 gap-2 items-center bg-[#161622]/80 rounded-lg p-3 border border-[#a62122]/30 justify-center">
                                   
                                    <div className="flex flex-col text-gray-300 border space-y-4 space-x-1 rounded-lg text-center py-1">
                                      <div className='text-[8px] md:text-xs lg:text-xs  text-center -mb-2 mt-1 font-medium'>
                                        Last Week
                                      </div>
                                      <div className='text-sm text-[#f8b447] '>
                                        {withdrawalWeek}
                                      </div>
                                    </div>

                                    <div className="flex flex-col  border rounded-lg text-center space-y-4 space-x-1 text-gray-300 py-1">
                                      <div className='text-[8px] md:text-xs lg:text-xs  text-center -mb-2 mt-1 font-medium '>
                                        Redeemable  
                                      </div>
                                      <div className=' text-sm text-[#f8b447] '>
                                        {(wihdrawnAmount).toFixed(2)}
                                      </div>
                                    </div>

                                    <div className="flex flex-col border rounded-lg space-y-4 space-x-1 text-center py-1">
                                      <div className='text-[8px] md:text-xs lg:text-xs  text-center -mb-2 mt-1 font-medium text-gray-300'>
                                        Purchased
                                      </div>
                                      <div className=" text-sm text-center text-[#f8b447]  ">
                                        { (value2).toFixed(2)  }
                                      </div>
                                    </div>
                                  </div>
                              </div>
                             )
                                    
                          ) : (
                              <div className="text-center text-gray-400 py-4">
                                  No purchases yet
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          )}
      </div>
    </div>
  );
}