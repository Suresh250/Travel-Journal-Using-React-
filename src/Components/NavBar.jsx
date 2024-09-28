import globe from "/Images/Globe.png"


function NavBar(){
    return(
        <nav className="nav--container">
            <img src = {globe} alt="logo" className="nav--logo"></img>
            <h2 className="nav--title">my travel journal.</h2>
        </nav>
    )
}

export default NavBar;