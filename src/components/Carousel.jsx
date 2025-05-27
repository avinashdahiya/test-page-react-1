import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: "Caramel Macchiato",
      image:
        "https://www.shutterstock.com/image-photo/brno-czechia-06162023-starbucks-coffee-600nw-2320284399.jpg",
    },
    {
      id: 2,
      title: "Iced Pumpkin Spice Latte",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkXyprxEviNOJLoKE78WPTdeVHVOb_7lx2w&s",
    },
    {
      id: 3,
      title: "Cold Brew Coffee",
      image:
        "https://athome.starbucks.com/sites/default/files/styles/menu_xlarge/public/2025-03/CAH_JebbitQuizCold_Nav_Promo_862x424.jpg.webp?itok=IxY0IyRX",
    },
    {
      id: 4,
      title: "Mocha Frappuccino",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/0d/b0/13/20/chili-mocha-frappuccino.jpg",
    },
    {
      id: 5,
      title: "Matcha Green Tea Latte",
      image:
        "https://img.freepik.com/free-photo/glass-matcha-green-tea-with-latte-art-top_140725-6942.jpg",
    },
    {
      id: 6,
      title: "Chai Tea Latte",
      image:
        "https://www.shutterstock.com/image-photo/bangkok-thailand-june-2-2024-260nw-2470040419.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-2">
        Starbucks Featured Sips
      </h2>
      <p className="text-center text-gray-600 mb-8">
        A taste tour of our most loved handcrafted beverages
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map(({ id, title, image }) => (
          <SwiperSlide key={id}>
            <div className="rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src={image}
                alt={title}
                className="w-full h-60 object-cover md:h-64 lg:h-72"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-green-900">{title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
