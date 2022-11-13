import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/config'

const searchContainer = {
    padding: "10px",
}
const formControl = {
  display: 'flex'
}
const btn = {
  padding: "5px",
  width: "100px",
  border: "none",
  backgroundColor: "#82CD47",
  color: "#fff",
  cursor: "pointer"
}

const Search = () => {

  const [searchValues, setSearchValues] = useState("")
  const navigate = useNavigate()

  const handleChange = e => {
    setSearchValues({
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post(`api/search`, searchValues)
    .then(response => {
      localStorage.setItem("data",JSON.stringify(response.data.results[0]))
    })
    .then(()=>navigate('/search'))
    .catch(err=> {
      console.log(err)
    })

  }

  return (
    <div style={searchContainer}>
        <form onSubmit={handleSubmit}>
            <div style={formControl}> 
                <input 
                  type="text" 
                  name="search" 
                  placeholder='Character name' 
                  onChange={handleChange}
                  style={{
                    padding : "10px",
                    width: "300px"
                  }}
                />
                <button 
                  style={btn}
                  type='submit'
                >Search</button>
            </div>
        </form>
    </div>
  )
}

export default Search