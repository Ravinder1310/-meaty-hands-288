import {Box,Image,Text} from '@chakra-ui/react'
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


    return (
        
        <Box display={'grid'} gridTemplateColumns='auto'>
            {
              data1.map(el=>{
                <Box>
                   <Image src={el.image} alt='Error'/>
                   {/* <Text value={el.title}/> */}
                </Box>
              })
            }
        </Box>        
    )
}