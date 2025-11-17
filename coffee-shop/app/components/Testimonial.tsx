"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    profession: "Profession",
    image: "/images/testimonial-1.jpg",
    comment:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
  {
    id: 2,
    name: "Client Name",
    profession: "Profession",
    image: "/images/testimonial-2.jpg",
    comment:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
  {
    id: 3,
    name: "Client Name",
    profession: "Profession",
    image: "/images/testimonial-3.jpg",
    comment:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
  {
    id: 4,
    name: "Client Name",
    profession: "Profession",
    image: "/images/testimonial-4.jpg",
    comment:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
];

export default function Testimonial() {
  return (
    <section className="container mx-auto py-20 px-4 lg:px-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h4 className="text-primary font-bold text-xl uppercase tracking-[5px] relative inline-block">
          Testimonial
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-[2px] bg-primary"></span>
        </h4>
        <h1 className="font-heading font-bold text-4xl lg:text-5xl text-secondary mt-4">
          Our Clients Say
        </h1>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            // Customizing Tailwind classes for Swiper pagination bullets via global CSS is common,
            // but basic functional styling works out of the box.
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12" // Padding bottom for pagination dots
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col gap-4">
                {/* User Info Header */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-none" // Square images based on template? Or rounded? Template has "img-fluid" usually square/rect. Let's keep it slight rounded or square.
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <h4 className="font-heading font-bold text-xl text-secondary">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 italic">
                      {item.profession}
                    </p>
                  </div>
                </div>

                {/* Comment Body */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}