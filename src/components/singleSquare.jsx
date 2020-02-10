import React from 'react';

const defaultStyle = {
        width: '50px',
        height: '50px', 
    }

function SingleSquare(props) {
    const { styleProp ,piece, cellIndex,rowIndex, onClick } = props
    const usedStyle = { ...defaultStyle , ...styleProp }
    return (
      <div style={usedStyle} key={cellIndex} onClick={()=>onClick(rowIndex, cellIndex)}>
        {piece}        
      </div>
    )
  }

export default SingleSquare;