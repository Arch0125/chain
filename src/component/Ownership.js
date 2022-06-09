import { Divider, Flex, InputGroup, InputLeftAddon,Input, Text, Button } from '@chakra-ui/react';
import React from 'react';

const Ownership =() =>{
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

        <Button mt={"20px"} >Mint image as NFT</Button>
    </Flex>)
}

export default Ownership