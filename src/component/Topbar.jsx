import React from 'react'
import Search from './Search'

const topbar = {
    width: '100%',
    height: "80px",
    backgroundColor: "#0D4C92",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center"
}

const Topbar = () => {
  return (
    <div style={topbar}>
        <Search />
    </div>
  )
}

export default Topbar