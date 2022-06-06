import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import "./__slider.scss";

const Slider = () => {
  const src: string[] = [
    "https://res.cloudinary.com/diot4imoq/image/upload/v1652947739/280085053_1207722309974776_7023325868430485363_n_vtqbcj.png",
    "https://res.cloudinary.com/diot4imoq/image/upload/v1652947807/1_ilg2ga.png",
    "https://res.cloudinary.com/diot4imoq/image/upload/v1652947868/3_nnleod.png",
    "https://res.cloudinary.com/diot4imoq/image/upload/v1652947874/4_itqgzs.png",
    "https://res.cloudinary.com/diot4imoq/image/upload/v1652947878/5_ecegn8.png",
  ];

  return (
    <section className="slider">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
      >
        {src.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="img-slider">
                <a href=" ">
                  <img src={item} alt="" />
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Slider;
