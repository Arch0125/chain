import { Divider, Flex, InputGroup, InputLeftAddon,Input, Text, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Chain from '../smartcontracts/artifacts/contracts/Chain.sol/Chains.json'

const Ownership =() =>{

    const[hash,setHash]=useState('');
    const[amount,setAmount]=useState('');
    const[desc,setDesc]=useState('');
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

    const ContractInterface = new ethers.Contract('0x2e565DA550D975e3d13c5FA3C7D9d5a40c65BD5d',Chain.abi,signer);

    const addImage=()=>{
        ContractInterface.addImage(hash,amount,desc);
    }

    return(
    <Flex flexDirection={"column"} mt={"45px"} padding={"20px"} alignItems={"center"} borderWidth={"2px"} width={"85%"} height={"fit-content"} borderColor={"gray"} rounded={"2xl"} > 
        <Text color={"white"} mb={"10px"} >Claim Ownership</Text>
        <Divider/>
        <InputGroup mt={"15px"} >
            <InputLeftAddon children='IPFS Hash' />
            <Input bgColor={"gray.800"} color={"white"}  />
        </InputGroup>

        <InputGroup mt={"15px"} >
            <InputLeftAddon children='Amount' />
            <Input bgColor={"gray.800"} color={"white"}  />
        </InputGroup>

        <InputGroup mt={"15px"} >
            <InputLeftAddon children='Description' />
            <Input bgColor={"gray.800"} color={"white"}  />
        </InputGroup>

        <Button onClick={addImage} mt={"20px"} >Claim Ownership</Button>
    </Flex>)
}

export default Ownership