import {Box,
        HStack,
        Image,
        IconButton,
        Input,
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalCloseButton,
        ModalBody,
        ModalFooter,
        Button,
        CheckboxGroup,
        Stack,
        Checkbox
            } from '@chakra-ui/react'
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

  let style2={
    width:'100px',
    height:'500px',
    bgColor:'black',
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
                <Image onClick={onOpen} ref={btnRef} w={'50px'} h='50px' borderRadius={'50%'} bg='transparent' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSrvqO78OKQTegcXcF6vkcMcUqT2wXIfedw&usqp=CAU' alt='Error'/>
            {/* </Button> */}
            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior='inside'
                
             >
             <ModalOverlay />
             <ModalContent>
                <ModalHeader>Select Language</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                   <CheckboxGroup colorScheme='blue' defaultValue={['hindi', 'english','punjabi']}>
                      <Stack spacing={[1, 5]} direction={[ 'column']}>
                      <Checkbox value='hindi'>Hindi</Checkbox>
                      <Checkbox value='english'>English</Checkbox>
                      <Checkbox value='punjabi'>Punjabi</Checkbox>
                      <Checkbox value='marathi'>Marathi</Checkbox>
                      <Checkbox value='haryanvi'>Haryanvi</Checkbox>
                      <Checkbox value='gujrati'>Gujrati</Checkbox>
                      <Checkbox value='malayalam'>Malayalam</Checkbox>
                      <Checkbox value='telugu'>Telugu</Checkbox>
                      <Checkbox value='kanada'>Kanada</Checkbox>
                      <Checkbox value='tamil'>Tamil</Checkbox>
                      <Checkbox value='bengali'>Bengali</Checkbox>
                      <Checkbox value='bhojpuri'>Bhojpuri</Checkbox>
                      <Checkbox value='odia'>Odia</Checkbox>
                      </Stack>
                    </CheckboxGroup>
                </ModalBody>
                <ModalFooter>
                   <Button onClick={onClose}>Close</Button>
                </ModalFooter>
             </ModalContent>
           </Modal>
           </Box>
            
            <Button border={'1px solid white'} bgColor='transparent' color={'white'} padding='22px 25px'>Login</Button>
            <Button bgColor='#673ab7' border={'transparent'} color='white' padding='23px 15px' fontSize={'22px'}>
              <Image width={'32px'} marginRight='5px' h='26px' src='https://media-private.canva.com/v9BIM/MAFRhnv9BIM/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20221110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221110T035606Z&X-Amz-Expires=25830&X-Amz-Signature=ca1aaa0c8cdcc9de91998d3a9293918e9bd623421da30016bfe76b4c485273dd&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2010%20Nov%202022%2011%3A06%3A36%20GMT' alt='Er'/>
              BUY PLAN</Button>
              <Icon as={HamburgerIcon} color='white' fontSize={'40px'}/>
          </Box>
        </Box>
      </HStack>
         
     </Box>
    
    </>
    )
    
}