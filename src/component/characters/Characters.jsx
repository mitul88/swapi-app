import React from 'react'
import CardView from '../CardView'
import "./characters.css"


const Characters = ({data, loading}) => {

  if(loading) {
    return <h2>Loading....</h2>
  }
  return (
    <div className="container">
      {data.map((character, index)=> (
        <CardView key={index} character={character} />
      ))}
    </div>
  )
}

export default Characters