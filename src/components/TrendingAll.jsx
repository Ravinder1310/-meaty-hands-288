import {Box,Image,Text,Grid} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function TrendingAll(){
    const[data1,setData1] = useState([])
    const getData=async()=>{
        let res = await fetch('http://localhost:5050/trendingAll')
        let data = await res.json()
        console.log(data)
        setData1(data)
    }
    useEffect(() => {
      getData()  
    },[])


    return (

      <Grid justifyContent='space-between' templateColumns='repeat(4, 1fr)' gap={8} marginTop='12px' padding={'10px 32px'} borderRadius='10px'>
            {
              data1.map(el=>{
                return (
                     <Box _hover={{border:'10px solid white'}}>
                     <Image borderRadius='10px' width={'100%'} src={el.image} alt='Error'/>
                     <Text value={el.title}/>
                     </Box>
                )
                
              })
            }
       </Grid>        
    )
}