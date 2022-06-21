

import React from 'react';
import "./Header.css"

const Header = ({onOpenModal}) => {
  
  const onClickHandler = () => {
    onOpenModal(true);
  };

  
  return (
    <>
      <div className="header">
        <h3>List of cities</h3>
        <div>
          <input type="text" placeholder="Search" />
          <button onClick={onClickHandler}>+ Add New</button>
        </div>
      </div>
    </>
  )
}

export default Header


