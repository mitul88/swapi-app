import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const card = {
  width: "300px",
  height: "250px",
  borderRadius: "10px",
  border : "1px solid #0D4C92",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}
const titleWrapper = {
  width: "100%",
  padding: "10px 0px",
  backgroundColor: "#0D4C92",
  borderRadius: "10px 10px 0px 0px"
}
const content = {
  padding: "10px 20px",
  color: "#0D4C92"
}
const btnWrapper = {
  padding: "0px 20px 10px 20px"
}
const btn = {
  padding: "5px 10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#82CD47",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600"
}

const CardView = ({character}) => {

const url = character.url
const id = url.match(/\d+/)[0]

  return (
    <div style={card}>
      <div style={titleWrapper}>
        <Typography variant="h5" component="div" sx={{color: "#fff"}} align="center">
            {character.name}
        </Typography>
      </div>
      <div style={content}>
          <Typography variant="h6">
            Height : {character.height}
          </Typography>
          <Typography variant="h6">
             Mass : {character.mass}
          </Typography>
          <Typography variant="h6">
             Birth year : {character.birth_year}
          </Typography>     
      </div>
      <div style={btnWrapper}>
        <Link to={`/view/${id}`}>
          <button style={btn}>
            More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CardView