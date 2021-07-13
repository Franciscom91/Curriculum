import { Container, Row } from "react-bootstrap";
import facebookImg from '../../assets/img/facebookImg.png';
import githubImg from '../../assets/img/githubImg.png';
import instagramImg from '../../assets/img/instagramImg.png';
import linkedInImg from '../../assets/img/linkedInImg.png';

const Footer = () => {
    return ( 
        <Container className="footer">
            <Row className="footer-title">
                <p>You can also find me in:</p>
            </Row>
            <Row className="footer-icons">
                <a href="https://www.facebook.com/francisco.maldonado.1191/" target="_blank" rel="noreferrer"><img src={facebookImg} alt="Facebook" title="Facebook" /></a>
                <a href="https://github.com/Franciscom91" target="_blank" rel="noreferrer"><img src={githubImg} alt="Github" title="Github" /></a>
                <a href="https://www.instagram.com/panchomaldo/" target="_blank" rel="noreferrer"><img src={instagramImg} alt="Instagram" title="Instagram" /></a>
                <a href="https://www.linkedin.com/in/francisco-maldonado-bottan/" target="_blank" rel="noreferrer"><img src={linkedInImg} alt="LinkedIn" title="LinkedIn" /></a>
            </Row>
            <Row className="footer-copyright">
                <p>Copyright® 2021</p>
            </Row>
        </Container>
     );
}
 
export default Footer;