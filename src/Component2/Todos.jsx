import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todosdata } from "../component1/store/Thunk/Todothunk";

function Todos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {todosdatas} = useSelector((state) => state.todo);
  console.log("todos data:", todosdatas);

  const nextpage = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(todosdata());
  }, []);
  return (
    <div>
      <Button variant="outlined" className="buttons" onClick={nextpage}>
        NextPage
      </Button>
      <h1> todosdata</h1>
      {
        todosdatas?.map((item)=>{
          return(
            <>
              <p>{item?.title}</p>
            </>
          )
        })
      }
    
    </div>
  );
}

export default Todos;
