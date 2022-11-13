import { Box, Flex, SimpleGrid, useColorModeValue, Stack, Link, Tag, Heading,Image,Text } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"






function Footer(){

    
    return(
        <Box 
           bg={useColorModeValue('white.100', 'white.900')}
      color={useColorModeValue('white.900', 'white.400')} w={"95%"} m={"auto"}
      bgColor='black'
      >
      <Container as={Stack} maxW={'6xl'} py={14}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={29} >
          <Stack align={'flex-start'}>
          <Heading as='h4' size='md'>Popular TVShows</Heading>
            <Link color={'grey'} href={'#'}>Kumkum Bhagya</Link>
            <Stack direction={'row'} align={'center'} spacing={10}>
              <Link color={'grey'} href={'#'}>Kundli bhagya</Link>
              
            </Stack>
            <Link color={'grey'} href={'#'}>Bhagya Lakshmi</Link>
            <Link color={'grey'} href={'#'}>Tujhse hai Rabta</Link>
            <Link color={'grey'} href={'#'}>Kyun Rishton Mein Ka</Link>
            <br></br>
            <Heading as='h4' size='md'>Premium Movies</Heading>
            <Link color={'grey'} href={'#'}>Kyu Meri Sonam Gupta Bewafa Hai</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link color={'grey'} href={'#'}>Helmet</Link>
              
            </Stack>
            <Link color={'grey'} href={'#'}>200 Halla Ho</Link>
            <Link color={'grey'} href={'#'}>14 Phere</Link>
           {/* first row */}
          </Stack>
          <Stack align={'flex-start'}>
            <Heading as='h4' size='md'>Popular Live TV Channels</Heading>
            <Link color={'grey'} href={'#'}>Aaj Tak</Link>
            <Link color={'grey'} href={'#'}>ZEE TV</Link>
            <Link color={'grey'} href={'#'}>ZEE TV HD</Link>
            <Link color={'grey'} href={'#'}>&TV HD</Link>
            <Link color={'grey'} href={'#'}>ZEE Marathi HD</Link>
            
          </Stack>
          <Stack align={'flex-start'} >
            <Heading as='h4' size='md'>Popular Web Series</Heading>
            <Link color={'grey'} href={'#'}>Jeet Ki Zid</Link>
            <Link color={'grey'} href={'#'}>Sunflower</Link>
            <Link color={'grey'} href={'#'}>Bichoo Ka Khel</Link>
            <Link color={'grey'} href={'#'}>State Of Siege:26/11</Link>
            <Link color={'grey'} href={'#'}>Naxalbari</Link>
            <Link color={'grey'} href={'#'}>Triplings</Link>
            <br></br>
            <Heading as='h4' size='md'>Policy Info</Heading>
            <Link color={'grey'} href={'#'}>Editorial Info</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link color={'grey'} href={'#'}>Vulnerability Disclouser Policy</Link>
              
            </Stack>
            <Link color={'grey'} href={'#'}>Terms And Condition </Link>
            <Link color={'grey'} href={'#'}>Customer Support Policy</Link>
            <Link color={'grey'} href={'#'}>Return Policy</Link>
          </Stack>
          
          <Stack align={'flex-start'} >
            <Box  p='10px 10px' bgColor={'grey'} borderRadius='10px'>
            <Heading as='h4' mb={'10px'} size='md'>Contect with us</Heading>
            <SimpleGrid columns={[2, 2, 2, 4]} gap={6} >
                <Image  boxSize='25px'src={'/instagram.png'}></Image>
                <Image  boxSize='25px'src={'/facebook.png'}></Image>
                <Image  boxSize='25px'src={'/twitter.png'}></Image>
                <Image  boxSize='25px'src={'/youtube.png'}></Image>
            </SimpleGrid>
            </Box>
            
            </Stack>
          </SimpleGrid>
          </Container>
          <Flex align={"flex-start"} marginLeft={"160px"}>
          <Heading as='h4' size='md'>Our Payment Partners</Heading>
          </Flex>
          <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
       
        </Box>
        </Box>
    )
}

export default Footer

















