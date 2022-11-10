import {Routes,Route} from 'react-router-dom';
import Disc from './Disc';
import Home from './Home';
import Movies from './Movies';
import TVShows from './TVShows'

export default function AllRouters(){
    return(
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/tvshows' element={<TVShows/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/disc' element={<Disc/>}/>
        </Routes>
    )
}