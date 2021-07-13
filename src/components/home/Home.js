import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../../assets/img/image1.jpg";
import Image2 from "../../assets/img/image2.jpg";
import Image3 from "../../assets/img/image3.jpg";
import Myself from "../../assets/img/photo.jpg";

const Home = () => {
    return ( 
        <section className="home" id="home">
            <div className="home-content">
                <img
                className="myself"
                src={Myself}
                alt="myself" />
                <h2>Francisco Maldonado Bottan</h2>
                <p>Full Stack Developer</p>
            </div>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Image1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Image2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Image3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
     );
}
 
export default Home;