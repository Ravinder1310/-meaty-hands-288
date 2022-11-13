// import Trending from '../components/Trending'
import  Slider  from '../components/Slider';
import Trending from '../components/Trending';
import { Text,Box} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Top10 from '../components/Top10';
import HindiEpisodes from "../components/HindiEpisodes"
import WebSeries from '../components/WebSeries';
import Footer from '../components/Footer';



export default function Movies(){
    let style={
        color:'#673ab7',
        fontSize:'25px'
    }
   
    
    return (
        <>
        {/* <Navbar /> */}
        <Box>
        <Slider />
        <Box display={'flex'} justifyContent='space-between' alignItems={'center'} paddingRight='100px'  marginTop={'30px'}>
        <Text textAlign={'left'} marginLeft='2%' fontSize='39px'>Trending Near You</Text>
        <Box>
        <Link style={style} to={'/trendingAll'}>More</Link>
        </Box>
        </Box>
        <Trending />
        <Box display={'flex'} justifyContent='space-between' alignItems={'center'} paddingRight='100px'  marginTop={'30px'}>
        <Text textAlign={'left'} marginLeft='2%' fontSize='39px'>Top 10 Movies in India</Text>
        <Box>
        <Link style={style} to={'/top10All'}>More</Link>
        </Box>
        </Box>
        <Top10 />
        <Box display={'flex'} justifyContent='space-between' alignItems={'center'} paddingRight='100px'  marginTop={'30px'}>
        <Text textAlign={'left'} marginLeft='2%' fontSize='39px'>Top 10 Web Series in India</Text>
        <Box>
        <Link style={style} to={'/webSeriesAll'}>More</Link>
        </Box>
        </Box>
        <WebSeries />
        </Box>
        <Footer />
        </>
    )
    

}