import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Image,Text } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import Footer from "../components/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function TVShows() {
    const[data1,setData1] = useState([])
    const getData=async()=>{
        let res = await fetch('http://localhost:5050/TVShowsAll')
        let data = await res.json()
        console.log(data)
        setData1(data)
    }
    useEffect(() => {

      getData()  
    },[])
  return (
    <>
    <Box>
    <Box paddingTop={'150px'} paddingBottom='10px'>
        <Box  width='100%' display='flex' justifyContent={'center'} bgColor='#401a4c' paddingBottom={'10px'}>
        <Image src='https://tpc.googlesyndication.com/simgad/18363903425717471092?' h={'200px'}  alt="Error"/>      
        </Box>
    </Box>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        // justifyContent='center'
        
      >

        <SwiperSlide>
          <Button position={'absolute'} marginLeft='-60%' marginTop={'25%'} bgColor='transparent' border='1px solid white' color={'white'} padding='30px 20px' fontSize={'25px'}>
            Watch Now   
          </Button>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x7707680c95e70a24006bd090c775c8000f5.jpg' />
       </SwiperSlide>
        <SwiperSlide>
        <Button position={'absolute'} marginLeft='-60%' marginTop={'25%'} bgColor='transparent' border='1px solid white' color={'white'} padding='30px 20px' fontSize={'25px'}>
            Watch Now
          </Button>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5214664/cover/1920x770d2c3aa3ff6c047d3a965f082c583b943.jpg'/>
            </SwiperSlide>
        <SwiperSlide>
        <Button position={'absolute'} marginLeft='-60%' marginTop={'25%'} bgColor='transparent' border='1px solid white' color={'white'} padding='30px 20px' fontSize={'25px'}>
            Watch Now
          </Button>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z553645/cover/1920x770176f42e22d424862b2c0ecb47799c3ee.jpg'/>
            </SwiperSlide>
        <SwiperSlide>
        <Button position={'absolute'} marginLeft='-60%' marginTop={'25%'} bgColor='transparent' border='1px solid white' color={'white'} padding='30px 20px' fontSize={'25px'}>
            Watch Now
          </Button>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5130241/cover/1920x770a91cb4072ee24745a47ead594735fff4.jpg'/>
            </SwiperSlide>
        <SwiperSlide>
        <Button position={'absolute'} marginLeft='-60%' marginTop={'25%'} bgColor='transparent' border='1px solid white' color={'white'} padding='30px 20px' fontSize={'25px'}>
            Watch Now
          </Button>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5222846/cover/1920x77001f8704f48bb47108bb60db62699aebe.jpg'/>
            </SwiperSlide>
        <SwiperSlide>
        <Button position={'absolute'} marginLeft='-60%' marginTop={'25%'} bgColor='transparent' border='1px solid white' color={'white'} padding='30px 20px' fontSize={'25px'}>
            Watch Now
          </Button>
            <Image src='https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5194280/cover/1920x77008b4524184ba4e3bbe0ba77829aeb4e6.jpg'/>
            </SwiperSlide>
        
       
      </Swiper>
    </Box>
    
    <Grid justifyContent='space-between' templateColumns='repeat(5, 1fr)' gap={8} marginTop='12px' padding={'10px 32px'} borderRadius='10px'>
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
       <Footer />
    </>
  );
}
