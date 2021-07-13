import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
    return ( 
        <Container className="about" id="about">
            <Row className="about-content">
                <Col className="about-content-left">
                    <h2>About Me</h2>
                    <p>Hi, my name is Francisco. I'm a 29 years old full stack developer. I'm a person committed with my work, self-taught and capable to solve problems.</p>
                </Col>
                <Col className="about-content-right">
                    <h2>Basic Information</h2>
                    <li>Date of Birth: 20 November, 1991</li>
                    <li>Place of Birth: Córdoba, Argentina</li>
                    <li>Phone Number: +54 9 3513 172-487</li>
                    <li>Email Adress: fmaldonadobottan@gmail.com</li>
                </Col>
            </Row>
        </Container>
     );
}
 
export default About;