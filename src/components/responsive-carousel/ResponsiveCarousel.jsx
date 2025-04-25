import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import FastFoodCards from '../fast-food-cards/FastFoodCards';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const ResponsiveCarousel = () => {
    return (
        <div className="relative w-full block lg:hidden">
            <button className="custom-prev absolute top-1/2 left-2 z-10 -translate-y-1/2 text-primary">
                <FaArrowLeft size={20} />
            </button>
            <button className="custom-next absolute top-1/2 right-2 z-10 -translate-y-1/2 text-primary">
                <FaArrowRight size={20} />
            </button>

            <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                pagination={true}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {[...Array(3)].map((_, i) => (
                    <SwiperSlide
                        key={i}
                        className="!flex !justify-center !items-center"
                    >
                        <FastFoodCards className="w-[170px] h-[100px] lg:w-[250px] lg:h-[150px]" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ResponsiveCarousel;
