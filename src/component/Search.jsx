import React from 'react'

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
  return (
    <div style={searchContainer}>
        <form>
            <div style={formControl}> 
                <input 
                  type="text" 
                  name="search" 
                  placeholder='Character name' 
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