import React from "react";
import Slider from "react-slick";

// Import your generated images
import img1 from "../../assets/ai/body1a.png";
import img2 from "../../assets/ai/body2.png";
import img3 from "../../assets/ai/body3.png";
import img4 from "../../assets/ai/body4.png";

const BodyTransformationCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  const images = [img1, img2, img3, img4];

  return (
    <div div style = {
      {
        width: "50%",
        maxWidth: "500px",
        margin: "0 auto",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center"
      }
    } >
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} 
          //style={{backgroundImage:`url(${src})`,backgroundSize:"cover",width:"250px",backgroundPosition:"center center"}}
          >
            <img
              src={src}
              alt={`Body transformation step ${index + 1}`}
              style={{
                width: "100%",
                height:"450px",
                borderRadius: "12px",
                objectFit: "100% 100%",
                padding:"40px"
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BodyTransformationCarousel;
