import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Doggetdata } from '../component1/store/Thunk/Dogapithunk';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function DogApi() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const {dogapi} = useSelector((state)=>state.dogapislice);
    console.log(dogapi,"dogapi state");

    const {loading} = useSelector((state)=>state.dogapislice);
    console.log(loading,"dataloading");

    const handleclick =()=>{
    const data = dispatch(Doggetdata());
    console.log(data,"alldata");  
    }
  
  return (
    <div>
          <Button variant="outlined" className='buttons' onClick={()=>navigate("/")} style={{marginBottom:"20px"}}>Next</Button><br></br>
          <Button variant="outlined" className='buttons' onClick={handleclick}>Lunchbutton</Button>

    {
        <>
        <h1>{loading}</h1>
        <h1>{dogapi.status}</h1>
        <img src={dogapi.message}></img>
        </>
    }
         
    </div>
  )
}

export default DogApi