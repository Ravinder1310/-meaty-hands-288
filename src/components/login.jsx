import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    alert('Login succesfully')
}

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      bgColor='black'
      >
      <Stack w={'30%'} py={12}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} marginBottom='30px' mt={'80px'}>
            Login to ZEE5
          </Heading>
          <Text fontSize={'lg'} color={'white.600'} >
          Login to continue enjoying uninterrupted video and personalised experience.
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          bgColor='black'
          width={'100%'}
         
          p={8}>
          <Stack spacing={5} width='100%' mt={'20px'}>
            
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Link textDecoration={'none'} color='blue.500' fontSize={'20px'}>Forgot Password</Link>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                onClick={handleClick}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
              </Button>
            </Stack>
            <Stack pt={6} >
              <Text align={'center'} fontSize='20px'>
                New to ZEE5 ? <Link to={'/signUp'} ml='10px'>Register</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}