import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();

    const handleclick=()=>{
        navigate("/lunch")
    }

    const Todosdata =()=>{
      navigate("/tododata")
    }
    const DOgapi=()=>{
      navigate("/dogapi")
    }
    const Countrydata = ()=>{
      navigate("/country")
    }
  return (
    <div className='btn'>
        <Button variant="outlined" className='buttons' onClick={handleclick}>Lunchbutton</Button>
        <Button variant="outlined" className='buttons' onClick={Todosdata}>TodosData</Button>
        <Button variant="outlined" className='buttons' onClick={ DOgapi}>RandomDogApi</Button>
        <Button variant="outlined" className='buttons' onClick={Countrydata}>Country</Button>
    </div>
  )
}

export default Main