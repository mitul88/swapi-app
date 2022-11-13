import React, { useEffect, useState } from 'react'
import "./main.css"
import axios from 'axios'
import { Container, Typography, Box, Pagination } from '@mui/material'
import Characters from '../../component/characters/Characters'



const Main = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)


  const fetchCharacters = () => {
    setLoading(true)
    axios.get(`http://localhost:3001/api/?page=${page}`)
    .then(response => {
      setData(response.data)
      if(response.status === 200) setLoading(false)
    })
  }

  useEffect(()=> {
    fetchCharacters()
  }, [page])


  return (
    <div className='main'>
      <Typography variant='h4' align='center' gutterBottom={true} sx={{color: "#0D4C92"}} >All your Star Wars Characters</Typography>
       <Characters data={data} loading={loading} />
      <div style={{
        width:"100%",
        display:'flex',
        paddingTop: "40px",
        justifyContent: 'center'
      }}>
        {
          !loading ?
          <Pagination
            count={8}
            color="primary"
            defaultPage={page}
            size="large"
            onChange={(e, value)=> setPage(value)}
          />
          :
          null
        }
          
      </div>
    </div>
  )
}

export default Main