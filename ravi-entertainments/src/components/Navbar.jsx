import {Box,HStack,Image,IconButton,Input,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {SearchIcon,HamburgerIcon} from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/react'
// import { HamburgerIcon } from 'react-icons/md'



export default function Navbar(){
  let style={
   textDecoration:'none',
   color:'white'
  }
  
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [scrollBehavior, setScrollBehavior] = React.useState('inside')

  const btnRef = React.useRef(null)

    return (
        <>
    <Box display={'flex'} bgColor='black' p={'10px 20px'} gap='10px' >
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnQ-hevlu4PNKmw7VC_wHSw4wwa978MQAXw&usqp=CAU'
         w={'100px'} h='70px' alignItems={'left'} alt='Error' bgColor={'blue'}/>
         <HStack gap={'150px'} marginLeft='30px'>
          <Box display={'flex'} gap='35px' fontSize={'25px'} >
            <Link style={style} to={'/'}>Home</Link>
            <Link style={style} to={'/tvshows'}>TVShows</Link>
            <Link style={style} to={'/movies'}>Movies</Link>
            <Link style={style} to={'/disc'}>Disc</Link>

          </Box>
          <Box display={'flex'} alignItems='center' gap={'10px'}>
            <Box display={'flex'} >
            <IconButton
              colorScheme='blue'
              aria-label='Search database'
              variant='outline'
              p={'16px 16px'}
              border='1px solid white'
              // borderTopLeftRadius='10px'
              // borderBottomLeftRadius='10px'
              size='lg'
              icon={<SearchIcon />}
/>
            <Input w={'390px'} 
            placeholder="Search for Movies,Shows,Channels etc." 
            color={'grey'} fontSize='20px' p={'22px 20px'} 
            bgColor={'#0f0617'}
            // borderTopRightRadius='10px'
            // borderBottomRightRadius='10px'
            border='1px solid white'
            // marginLeft={'-10px'}
            />
            </Box>
           
          <Box display={'flex'} gap='30px' marginLeft={'50px'} alignItems='center'>
           <Box>
           {/* <Button mt={3}  bgColor='black' borderRadius='50%'  marginTop='2px'> */}
                <Image onClick={onOpen} ref={btnRef} w={'50px'} h='50px' borderRadius={'50%'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSrvqO78OKQTegcXcF6vkcMcUqT2wXIfedw&usqp=CAU' alt='Error'/>
            {/* </Button> */}
            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior='inside'
             >
             <ModalOverlay />
             <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                   <Button onClick={onClose}>Close</Button>
                </ModalFooter>
             </ModalContent>
           </Modal>
           </Box>
            
            <Button border={'1px solid white'} bgColor='transparent' color={'white'} padding='22px 25px'>Login</Button>
            <Button colorScheme='purple' border={'transparent'} color='white' padding='23px 15px' fontSize={'22px'}>
              <Image width={'32px'} marginRight='5px' h='23px' src='data:image/png;base64,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' alt='E'/>
              BUY PLAN</Button>
              <Icon as={HamburgerIcon} color='white' fontSize={'40px'}/>
          </Box>
        </Box>
      </HStack>
         
     </Box>
    </>
    )
    
}