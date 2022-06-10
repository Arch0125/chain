import { Divider, Flex, Text, Box, Button, Img } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useEffect } from 'react';
import Chain from '../smartcontracts/artifacts/contracts/Chain.sol/Chains.json'

const ImageList =()=>{

    const[account,setAccount]=useState('');
    const[provider,setProvider]=useState('');
    const[signer,setSigner]=useState(null);
    const[images,setImages]=useState([]);

    useEffect(()=>{
        connectWallet();
        showImages();
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

    const ContractInterface = new ethers.Contract('0xa5c2202D84BeC33a348F7EF4c3b9d1Fea47471Ff',Chain.abi,signer);

    const showImages = async()=>{
        var listcount = await ContractInterface.getCount();
        var parselist = listcount.toString();
        console.log(parselist)
        setImages([]);
        for(let i =1;i<=parselist;i++){
            var image = await ContractInterface.getImage(i);
           {
                setImages((images)=>[...images,image])
            }
        }
        console.log(images)
    }



    return(
        <Flex flexDirection={"column"} mt={"40px"} width={"100vw"} height={"fit-content"} justifyContent={"center"} color={"black"} padding={"30px"} bgColor={"white"} >
            <Text fontSize={"2xl"} fontWeight={"bold"} >Global Canvas</Text>
            <Divider/>
            <Button onClick={showImages} >Refresh List</Button>
            <Flex flexDirection={"row"} >
                {
                     Object.keys(images).map((image, index) => (
                         <Flex mr={"15px"} justifyContent={'center'} alignItems={"center"} rounded={'2xl'} flexDirection={"column"} padding={"20px"} width={"fit-content"} overflowWrap={"break-word"} bgColor={'white'} borderWidth={"2px"} borderColor={'gray.200'}  >
                             <img src={images[index].hash} width="60%" />
                             <Text>Owner : {(images[index].owner).substring(0,7)}</Text>
                             <Text>Floor Price : {images[index].price}</Text>
                         </Flex>
                     ))
                }
            </Flex>
        </Flex>
    )
}   

export default ImageList
