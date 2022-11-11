import {Routes,Route} from 'react-router-dom';
import Disc from './Disc';
import Home from './Home';
import Movies from './Movies';
import TVShows from './TVShows'
import Login from '../components/login';
import Trending from '../components/Trending';
import TrendingAll from "../components/TrendingAll";
import Top10All from '../components/Top10All';
import HindiEpisodesAll from "../components/HindiEpisodesAll"
import WebSeriesAll from '../components/WebSeriesAll';

export default function AllRouters(){
    return(
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/tvshows' element={<TVShows/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/disc' element={<Disc/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/trendingAll' element={<TrendingAll />} />
        <Route path='/top10All' element={<Top10All />} />
        <Route path='/hindiEpisodesAll' element={<HindiEpisodesAll />} />
        <Route path='/webSeriesAll' element={<WebSeriesAll />} />
        </Routes>
    )
}