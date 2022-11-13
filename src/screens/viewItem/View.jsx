import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./view.css"


const View = () => {
  const [data, setData] = useState([])
  const[filmsId, setFilmsId] = useState([])
  const [loading, setLoading] = useState(false)
  const [species, setSpecies] = useState("N/A")
  const [homeworld, setHomeworld] = useState("N/A")

  const params = useParams()
  const id = params.id
  const navigate = useNavigate()

  const homeDir = () => {
    navigate("/")
  }
  
  let filmIdArr = []
  useEffect(()=> {
    const fetchCharacter = () => {
      setLoading(true)
      axios.get(`http://localhost:3001/api/view/${id}`)
      .then(response => {
        setData(response.data)
        if(response.status === 200) setLoading(false)

              // getting film id
              response.data.films.forEach(element=> {
                const filmId = element.match(/\d+/)[0]
                filmIdArr.push(filmId)
              })

              // getting film names from api call
              let filmsArr = []
              filmsId.forEach(id=> {
                axios.get(`http://localhost:3001/api/getFilmNames/${id}`)
                      .then(res => filmsArr.push(res.data))
                      .catch(err=> {
                        console.log("Films err: ", err)
                      })
              })

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
                axios.get(`http://localhost:3001/api/getHomeworld/${homeworldId}`)
                    .then(res => setHomeworld(res.data.name))
                    .catch(err=> {
                      console.log("Homeworld err: ", err)
                    })
      }).then(()=>{
        setFilmsId(filmIdArr)
      })
      .catch(err=> {
        console.log("Character info err: ", err)
      })
    }
    fetchCharacter()
  }, [])


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
                <div>
                  
                </div>
            </div>
        </div>
        <div style={{width:'100%', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <button className='linkBtn' onClick={()=>homeDir()}>Go Back</button>
        </div>
    </div>
  )
}

export default View

// {
//   films !==[] ?
//   (
//     <List>
//       {films.map((filmName, index)=> (
//           <ListItem disablePadding key={index}>
//           <ListItemButton>
//             <ListItemText>
//             {filmName.data}
//             </ListItemText>
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//    )
//    :
//    (<h2>Films loading</h2>)
// }