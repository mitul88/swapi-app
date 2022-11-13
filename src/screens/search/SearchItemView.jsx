import CardView from "../../component/CardView"

const SearchItemView = () => {
const storageData = JSON.parse(localStorage.getItem('data'))
   
  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: "100px"}}>
        <CardView character={storageData} />
    </div>
  )
}

export default SearchItemView