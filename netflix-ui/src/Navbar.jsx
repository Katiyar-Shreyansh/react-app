import logo from "./assets/logo.png"
const navStyle={
    maxwidth:"1280px",
    margin:"auto",
    width:"90%",
    display:"flex",
    justifyContent: 'space-between',
    height:"64px",
    border:"2px solid red",
    alignItems:"center",
}
const buttonStyles={
    backgroundColor:"rgb(229,20,9)",
    color:"white",
    padding:"5px",
    fontSize:"1.3rem",
    cursor:"pointer",
    border:"none",
    borderRadius:"4px"
}

function Navbar() {

return (
    <nav style={navStyle}>
    <img src={logo}alt="Netflix Logo"
    style={
    {width:"125px",
    }}/>
    <button style={buttonStyles}>Sign In</button>
    </nav>
)
}

export default Navbar