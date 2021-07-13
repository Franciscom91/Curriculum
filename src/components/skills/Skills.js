import { Container, Row, Col } from 'react-bootstrap'
import html5Logo from '../../assets/img/html5-logo.png'
import css3Logo from '../../assets/img/css3-logo.png'
import javascriptLogo from '../../assets/img/javascript-logo.png'
import phpLogo from '../../assets/img/php-logo.png'
import reactLogo from '../../assets/img/react-logo.png'
import laravelLogo from '../../assets/img/laravel-logo.png'
import mysqlLogo from '../../assets/img/mysql-logo.png'
import bootstrapLogo from '../../assets/img/bootstrap-logo.png'
import gitLogo from '../../assets/img/git-logo.png'


const Skills = () => {
    return (
        <Container className="skills" id="skills">
            <Row className="skills-content">
                <h2>My Skills</h2>
                <Col className="skills-logos">
                    <img src={html5Logo} title="HTML5" alt="HTML5" />
                    <img src={css3Logo} title="CSS3" alt="CSS3" />
                    <img src={javascriptLogo} title="Javascript" alt="Javascript" />
                    <img src={phpLogo} title="PHP" alt="PHP" />
                    <img src={reactLogo} title="React" alt="React" />
                    <img src={laravelLogo} title="Laravel5" alt="Laravel5" />
                    <img src={mysqlLogo} title="MySQL" alt="MySQL" />
                    <img src={bootstrapLogo} title="Bootstrap" alt="Bootstrap" />
                    <img src={gitLogo} title="Git" alt="Git" />
                </Col>
            </Row>
        </Container>
    );
}
 
export default Skills;
