import Navbar from "./Navbar";
import HeaderImg from "C:/web dev/react/netflix-ui/src/assets/headerImage.jpg";
function Header() {
    const HeaderStyles={
        border:"2px solid black",
        height:"70vh",
        background:`url(${HeaderImg})`,
    }
return (
    <Header style={HeaderStyles}>
        <Navbar/>
    </Header>
)
}

export default Header