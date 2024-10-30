import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import './About.css';

function About(){
    return (
        <Carousel>
          <Carousel.Item>
            <ExampleCarouselImage text="morning" />
            <Carousel.Caption>
              <h3>Morning</h3>
              <p>The morning brings fresh energy and a sense of new beginnings.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="day" />
            <Carousel.Caption>
              <h3>Day</h3>
              <p>The day is filled with activity as everyone is busy with their daily tasks.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="evening" />
            <Carousel.Caption>
              <h3>Evening</h3>
              <p>The evening offers a peaceful transition as the sun sets and the world begins to slow down.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="night" />
            <Carousel.Caption>
              <h3>Night</h3>
              <p>The night is quiet and calm, a time for rest and reflection.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default About;