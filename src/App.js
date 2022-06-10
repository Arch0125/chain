import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import IPFSUpload from './component/IPFSUpload';
import Ownership from './component/Ownership';
import { ethers } from 'ethers';
import { useState,useEffect } from 'react';

function App() {

  const[account,setAccount]=useState('');
  const[provider,setProvider]=useState('');
  const[signer,setSigner]=useState(null);

  useEffect(()=>{
      connectWallet();
  },[])

  const connectWallet = async() =>{
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const addr = await signer.getAddress()
      setAccount(addr)
      setProvider(provider)
      setSigner(signer);
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection={"column"} textAlign="center" fontSize="xl">
        <Text fontSize={"3xl"} mb={"10px"} mt={'20px'} fontWeight={"bold"} >Image Uploader</Text>
        <Text mb={"10px"} >Current Account : {account.substring(0,7)}...{account.substring(37)}</Text>
        <Divider/>
        <Flex flexDirection={"row"}>
          <Flex width={"50%"} marginLeft={"50px"}  >
            <IPFSUpload/>
          </Flex>
          <Flex width={"50%"} >
            <Ownership/>
          </Flex>
        </Flex>
        
      </Flex>
    </ChakraProvider>
  );
}

export default App;
