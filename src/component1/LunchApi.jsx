import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from './store/Thunk/Thunk';

function LunchApi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {data} = useSelector((state) => state.lunchdata);
  console.log('Data from useSelector:',data);

  const nextpage = () => {
    navigate("/");
  }

  useEffect(() => {
    dispatch(getdata()); 
  }, [dispatch]);
  
  return (
    <div>
      <Button variant="outlined" className='buttons' onClick={nextpage}>NextPage</Button>
      {data?.crew?.map((item)=>{
          return(
            <>
            <h1>{item.crew}</h1>
            <h1>{item.role}</h1>
            </>
          )
        })
      }     
  
    
    </div>
  );
}

export default LunchApi;
