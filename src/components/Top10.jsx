import {Box,Image,Text,Grid} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Top10(){
    const[data1,setData1] = useState([])
    const getData=async()=>{
        let res = await fetch('http://localhost:5050/top10')
        let data = await res.json()
        console.log(data)
        setData1(data)
    }
    useEffect(() => {
      getData()  
    },[])


    return (

      <Grid justifyContent='space-between' templateColumns='repeat(5, 1fr)' gap={8} marginTop='12px' padding={'10px 32px'} borderRadius='10px'>
            {
              data1.map(el=>{
                return (
                     <Box >
                     <Image borderRadius='10px' width={'100%'} src={el.image} alt='Error'/>
                     {/* <Text value={el.title}/> */}
                     </Box>
                )
                
              })
            }
       </Grid>        
    )
}