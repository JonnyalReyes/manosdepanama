import React from "react";

import Notice from "./Notice";
import Categories from "./Categories";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const images = [
  '/placeholder.svg?height=600&width=1200',
  '/placeholder.svg?height=600&width=1200',
  '/placeholder.svg?height=600&width=1200',
]

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  }

  return (
    <>
      <Notice />
      <Categories />

      <div className="relative h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <img
              src={image}
              alt={`Artesanía panameña ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Manos de Panamá</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2x1 mx-auto">
            Descubre la belleza y autenticidad de la artesanía panameña. Cada pieza cuenta una historia, cada compra apoya a un artesano local.
          </p>
          
            <button className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105">
              Explorar Ahora
        

            </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
