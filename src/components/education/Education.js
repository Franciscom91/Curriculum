import { Container, Row, Col } from "react-bootstrap"
import mundosELogo from '../../assets/img/mundose-logo.jpg'

const Education = () => {
    return (
        <Container className="education" id="education">
            <Row className=" education-content">
                <h2>Education</h2>
                <Col sm={4} className="education-image">
                    <div>
                        <img src={mundosELogo} alt="mundosE" />
                    </div>
                </Col>
                <Col sm={8} className="education-text">
                    <div>
                        <h3>Mundos E</h3>
                        <h4>People & Business School</h4>
                        <span>Full stack developer endorsed by National University of Cordoba</span>
                        <p>October 2020 to May 2021</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Education;