import "./Modal.css";

import React, {useContext} from 'react';
import  {GlobalInfo} from "../../App";

const Modal = ({onCloseModal}) => {

    const {inputValue,setInputValue,listOfCities,setListOfCities} = useContext(GlobalInfo);
    

  const onClickHandler = () => {
    onCloseModal(false);
  };

  const onClickSaveHandler = () =>{
    if(!inputValue){

    }else{
      setListOfCities([...listOfCities,inputValue]);
      setInputValue("")
    }
  }
  return (

    <>
    
      <div className="modalBackground">
        <div className="modalContainer">
         <div className="modalHeader">
          <div className="title">
            <span>Add New City</span>
          </div>
           <div className="titleCloseBtn">
            <button onClick={onClickHandler}>X</button>
          </div>
         </div>
          <div className="body">
            <input type="text" placeholder="Add Title" 
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
          </div>
          <div className="footer">
            <button onClick={onClickHandler}>Close</button>
            <button onClick={onClickSaveHandler}>Save</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal

