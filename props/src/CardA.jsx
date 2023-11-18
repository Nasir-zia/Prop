import React from 'react'

const CardA = (props) => {

  return (
    <div>
      <h1 style={{color:"blue",fontSize:"1000", textAlign:'center' }}>Props Data passing</h1>
      <h1 style={{textAlign:'center'}}>{props.text}</h1>
      <h4 style={{textAlign:'center'}}>{props.text2}</h4>
      
    </div>
  )
}

export default CardA
