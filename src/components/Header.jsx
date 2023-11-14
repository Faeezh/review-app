import React from 'react'



function Header({text, bgColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: 'pink'
    }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>Reviews UI {text}</h2>
        </div>
    </header>
  )
}


export default Header
