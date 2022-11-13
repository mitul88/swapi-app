import React, { useEffect, useState } from 'react'
import "./main.css"
import axios from 'axios'
import { Typography } from '@mui/material'
import Characters from '../../component/characters/Characters'



const Main = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  // const [currentPage, setCurrentPage] = useState(1)

  useEffect(()=> {
    const fetchCharacters = () => {
      setLoading(true)
      axios.get('http://localhost:3001/api/')
      .then(response => {
        setData(response.data)
        if(response.status === 200) setLoading(false)
      })
    }
    fetchCharacters()
  }, [])

  return (
    <div className='main'>
      <Typography variant='h4' align='center' gutterBottom={true} sx={{color: "#0D4C92"}} >All your Star Wars Characters</Typography>
        <Characters data={data} loading={loading} />
    </div>
  )
}

export default Main