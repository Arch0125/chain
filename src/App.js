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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex flexDirection={"column"} textAlign="center" fontSize="xl">
        <Text fontSize={"3xl"} mb={"20px"} mt={'20px'} fontWeight={"bold"} >Image Uploader</Text>
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
