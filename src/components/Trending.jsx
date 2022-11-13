import {Box,Image,Text,Grid} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Trending(){
    const[data1,setData1] = useState([])
    const getData=async()=>{
        let res = await fetch('http://localhost:5050/trending')
        let data = await res.json()
        console.log(data)
        setData1(data)
    }
    useEffect(() => {
      getData()  
    },[])
    const handleClick = (link) => {
      window.location.href=link;
    }


    return (

      <Grid justifyContent='space-between' templateColumns='repeat(5, 1fr)' gap={8} marginTop='12px' padding={'10px 32px'} borderRadius='10px'>
            {
              data1.map(el=>{
                return (
                     <Box _hover={{border:'10px solid white'}} >
                     <Image onClick={()=>handleClick(el.watch2)} borderRadius='10px' width={'100%'} src={el.image} alt='Error'/>
                     {/* <Text value={el.title}/> */}
                     </Box>
                )
                
              })
            }
       </Grid>        
    )
}