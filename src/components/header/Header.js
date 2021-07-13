import { Link } from "react-scroll"

const Header = () => {
    return ( 
        <div className="header">
            <nav className="navbar">
                <ul>
                    <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-96}
                    duration={500}
                    >Home</Link>
                    <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-96}
                    duration={500}
                    >About</Link>
                    <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-96}
                    duration={500}
                    >Skills</Link>
                    <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-96}
                    duration={500}
                    >Education</Link>
                    <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-96}
                    duration={500}
                    >Contact</Link>
                </ul>
            </nav>
        </div>
    );
}
 
export default Header;