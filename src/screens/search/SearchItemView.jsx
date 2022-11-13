import { useNavigate } from "react-router-dom"
import CardView from "../../component/CardView"

const SearchItemView = () => {
const storageData = JSON.parse(localStorage.getItem('data'))

const navigate = useNavigate()
const homeDir = () => {
    navigate("/")
  }
   
  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding: "100px"}}>
        <CardView character={storageData} />
        <div style={{width:'100%', marginTop:"20px", display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <button className='linkBtn' onClick={()=>homeDir()}>Home</button>
        </div>
    </div>
  )
}

export default SearchItemView