import { Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./view.css"


const View = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [species, setSpecies] = useState("N/A")
  const [homeworld, setHomeworld] = useState("N/A")

  const params = useParams()
  const id = params.id

  useEffect(()=> {
    const fetchCharacter = () => {
      setLoading(true)
      axios.get(`http://localhost:3001/api/view/${id}`)
      .then(response => {
        setData(response.data)
        if(response.status === 200) setLoading(false)
              const speciesUrl = response.data.species[0]
              if(speciesUrl !== undefined) {
                const speciesId = speciesUrl.match(/\d+/)[0]
                axios.get(`http://localhost:3001/api/getSpecies/${speciesId}`)
                    .then(res =>setSpecies(res.data.name))
                    .catch(err=> {
                      console.log("Species err: ", err)
                    })
              }
              const homeworldUrl = response.data.homeworld
              const homeworldId = homeworldUrl.match(/\d+/)[0]
              console.log(homeworldId)
                axios.get(`http://localhost:3001/api/getHomeworld/${homeworldId}`)
                    .then(res => setHomeworld(res.data.name))
                    .catch(err=> {
                      console.log("Homeworld err: ", err)
                    })
      }).catch(err=> {
        console.log("Character info err: ", err)
      })
    }
    fetchCharacter()
  }, [])
  
  console.log(species)
  if(loading) {
    return <h2 style={{width:'300px', padding:'100px', margin:'auto'}}>Loading....</h2>
  }
  return (
    <div className='view'>
        <Typography variant='h3' align='center' gutterBottom={true} sx={{color: "#0D4C92", marginTop: "20px"}} >{data.name}</Typography>
        <div className='container'>
            <div className='left'>
                <Typography variant='h4' sx={{marginBottom: '30px'}}>Details</Typography>
                <Typography variant='h6' gutterBottom><span style={{fontWeight:"bold"}}>Height:</span> {data.height}</Typography>
                <Typography variant='h6' gutterBottom><span style={{fontWeight:"bold"}}>Species:</span> {species}</Typography>
                <Typography variant='h6' gutterBottom><span style={{fontWeight:"bold"}}>Homeworld:</span> {homeworld}</Typography>
                <Typography variant='h6' gutterBottom><span style={{fontWeight:"bold"}}>Mass:</span> {data.mass}</Typography>
                <Typography variant='h6' gutterBottom><span style={{fontWeight:"bold"}}>Hair Color:</span> {data.hair_color}</Typography>
                <Typography variant='h6' gutterBottom><span style={{fontWeight:"bold"}}>Skin Color:</span> {data.skin_color}</Typography>
                <Typography variant='h6' gutterBottom><span style={{fontWeight:"bold"}}>Eye Color:</span> {data.eye_color}</Typography>
                <Typography variant='h6' gutterBottom><span style={{fontWeight:"bold"}}>Birth Year:</span> {data.birth_year}</Typography>
                <Typography variant='h6' gutterBottom><span style={{fontWeight:"bold"}}>Gender:</span> {data.gender}</Typography>
            </div>
            <div className='right'>
                <Typography variant='h4' sx={{marginBottom: '30px'}}>Movies Appeared</Typography>
            </div>
        </div>
        <div style={{width:'100%', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <button className='linkBtn'>Go Back</button>
        </div>
    </div>
  )
}

export default View