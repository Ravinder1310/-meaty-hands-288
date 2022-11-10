// // import axios from 'axios'
// // import { useEffect, useState } from 'react';

export default function Slider(){


    const getData=async()=>{
        let res = await fetch('http://localhost:5050/slider')
        let data = await res.json()
        // console.log(data)

    }
getData()


    return (
        <>
        
        </>
    )
}