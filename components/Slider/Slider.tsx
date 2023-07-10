import React, { useRef, useState} from "react";
import {Swiper, SwiperRef, SwiperClass, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {gsap} from "gsap";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Slider.module.css'

import SliderItem from "./SliderItem";


import {renderIconComponent, sliderIconData} from "./SliderIcon";
import {useMediaQuery} from "react-responsive";



const Slider:React.FC = () => {
    const [instance, setInstance] = useState<SwiperClass | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const swiperElRef = useRef<SwiperRef>(null);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const handleSlideHover = (isActive: boolean) => {
        if(swiperElRef !== null && swiperElRef.current) {
            const activeIndex = swiperElRef.current.swiper.activeIndex;
            if (isActive && swiperElRef.current && swiperElRef.current.swiper.autoplay.running) {
                swiperElRef.current.swiper.autoplay.stop();
            }
            const modals = document.querySelectorAll('.knowledge_modal');
            const activeModal = modals[activeIndex];
            if (isActive) {
                if (isTabletOrMobile) {
                    gsap.to(activeModal, {
                        y: "-150px",
                        ease: "power4.out",
                        duration: 1,
                        opacity: 1,
                    });
                } else {
                    gsap.to(activeModal, {
                        x: "-250px",
                        ease: "power4.out",
                        duration: 1,
                        opacity: 1,
                    });
                }

            }
        }
    };


    const handleSlideLeave = () => {
        if (swiperElRef.current && !swiperElRef.current?.swiper.autoplay.running) {
            swiperElRef.current?.swiper.autoplay.start();
        }
        setHoveredIndex(null)
        const modals = document.querySelectorAll('.knowledge_modal');
        if(isTabletOrMobile) {
            gsap.to(modals, {
                y: "0",
                ease: "power4.out",
                duration: 1,
                opacity: 0,
            });
        }else{
            gsap.to(modals, {
                x: "0",
                ease: "power4.out",
                duration: 1,
                opacity: 0,
            });
        }
    };
    return(
        <Swiper
            slidesPerView={3}
            direction={"horizontal"}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            ref={swiperElRef} onSwiper={setInstance}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={
                {
                    1024: {
                        direction:"vertical"
                    }
                }
            }
            onSlideChangeTransitionStart={(sw) => {
                const activeSlide = sw.activeIndex;
                const slides = document.querySelectorAll('.knowledge_item');
                const activeSlideElement = slides[activeSlide];
                if(isTabletOrMobile){
                    gsap.to(slides, {
                        y: "0",
                        scale: 1,
                        ease: "power4.out",
                        duration:1
                    });
                    gsap.to(activeSlideElement, {
                        y: "-150px",
                        ease: "power4.out",
                        duration:1,
                        scale: 1.2,
                    });
                }else {
                    gsap.to(slides, {
                        x: "0",
                        scale: 1,
                        ease: "power4.out",
                        duration: 1
                    });
                    gsap.to(activeSlideElement, {
                        x: "-150px",
                        ease: "power4.out",
                        duration: 1,
                        scale: 1.2,
                    });
                }

            }}
            className={styles.customSwiper}
        >
            {sliderIconData.map((slideContent, index) => (
                <SwiperSlide key={index} className={styles.swiperItem}>
                    {({ isActive }) => (
                        <div className={"my-auto w-min ml-auto relative"} onMouseEnter={() => handleSlideHover(isActive)} onMouseLeave={handleSlideLeave}  >
                        <SliderItem content={slideContent.modalContent}>
                        <div className={'text-xl lg:text-4xl flex justify-center flex-col items-center w-full'}>
                            {renderIconComponent(slideContent.icon)}
                        </div>
                    </SliderItem>
                        </div>
                    )}
                </SwiperSlide>
            ))}

        </Swiper>
    )
}


export default Slider

