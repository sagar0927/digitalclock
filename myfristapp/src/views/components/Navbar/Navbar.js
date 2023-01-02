import React from 'react'

export default function Navbar() {
  return (  
    <div className='.Navbar' //style="background-color:;padding:flex-direction:'row'";
  
    style={{
      padding:16,
      display:'flex',
      height: 64,
      backgrouColor:"black",
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
  }}>

  <div className='brand'>
  </div>
  <div className='nav-links'>
    <a className='nav-link' href='/'>Home</a>
    <a className='nav-link' href='/'>Projects</a>
    <a className='nav-link' href='/'>Exprience</a>
  </div>

   <div className='brand'>
      <img src={require('../../../assets/Stamp.jpg')}  alt="profile" style={{heigth: 48, width: 48,borderRadius:24}}></img>
      </div>
      </div>
    )
}
