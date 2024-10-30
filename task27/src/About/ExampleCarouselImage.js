function ExampleCarouselImage({ text }) {
    return (
      <img
        className="d-block w-100 carousel-image"
        src={`/img/${text}.jpg`}
        alt={text}
      />
    );
  }
  
  export default ExampleCarouselImage;