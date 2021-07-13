import { Container, Row, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [validated, setValidated] = useState(false)
    const [formData, setFormData] = useState({})

    const handleOnChange = (e) => {
        setFormData( (prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const sendEmail = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity()) {
            emailjs.sendForm('gmail', 'template_curriculum', e.target, 'user_HFHX4o2F78kon3JyAR1om')
            .then((result) => {
            console.log(result.text)
            }, (error) => {
            console.log(error.text)
            });
            e.target.reset()
            alert('The message was sent successfully!')
        } else {
            alert('Please verify the form data.')
        }
    }

    return (
        <Container className="contact" id="contact">
            <Row className="contact-content">
                    <h2>
                        Contact Me
                    </h2>
                    <Form noValidate validated={validated} onSubmit={sendEmail}>
                        <Form.Group>
                            <Form.Control
                            onChange={handleOnChange}
                            require
                            type="text"
                            placeholder="Name"
                            name="name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                            onChange={handleOnChange}
                            require
                            type="tel"
                            placeholder="Phone"
                            name="phone"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                            onChange={handleOnChange}
                            require
                            type="email"
                            placeholder="Email"
                            name="email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicTextArea">
                            <Form.Control
                            onChange={handleOnChange}
                            require
                            name="message"
                            as="textarea"
                            rows={3}
                            placeholder="Message"
                            />
                            <Form.Control.Feedback>
                                Please enter your message
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                        <Button variant="secundary" type="reset">
                            Clear
                        </Button>
                    </Form>
            </Row>
        </Container>
    );
}
 
export default Contact;