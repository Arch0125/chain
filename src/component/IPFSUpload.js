import React, { useState } from 'react'
import { ImageUpload } from 'react-ipfs-uploader'
import { ChakraProvider, Flex,Text } from '@chakra-ui/react'

const IPFSUpload = () => {
    const [imageUrl, setImageUrl] = useState('')

    return (
        <ChakraProvider>
                <Flex width={"75%"} mt={"50px"} flexDirection={"column"} borderWidth={"2px"} borderColor={"gray"} rounded={"3xl"} height={"fit-content"} padding={"40px"} >
                    <Text mb={"10px"} >Upload to IPFS</Text>
                    <ImageUpload setUrl={setImageUrl} />
                    ImageUrl : <a
                        href={imageUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {imageUrl}
                    </a>
                </Flex>
        </ChakraProvider>
        
    )
}

export default IPFSUpload