import "./__bestselling.scss";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { HeartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { castToVND } from "../../../utils";

interface typeData {
  sale: number;
  img: string;
  name: string;
  price: number;
  priceOld: number;
}

const BestSelling = () => {
  const data: typeData[] = [
    {
      sale: 23,
      img: "https://emartmall.com.vn/image/cache/catalog/products/8997035601321/8997035601321-200x200.jpg",
      name: "Nước Uống Pocari Sweat Chai 900Ml",
      price: 19900,
      priceOld: 25700,
    },
    {
      sale: 20,
      img: "https://emartmall.com.vn/image/cache/catalog/products/8934564600357/8934564600357-2210-200x200.jpg",
      name: "Trà xanh C2 Chanh 455Ml",
      price: 6800,
      priceOld: 8500,
    },
    {
      sale: 0,
      img: "https://emartmall.com.vn/image/cache/catalog/products/089686010947/089686010947_1901-200x200.jpg",
      name: "Mì Goreng Đặc Biệt Gói 85G",
      price: 4700,
      priceOld: 0,
    },
    {
      sale: 16,
      img: "https://emartmall.com.vn/image/cache/catalog/products/089686043686/089686043686_1901-200x200.jpg",
      name: "Mì Goreng Rasa Iga Penyet Vị Sườn 80G",
      price: 4700,
      priceOld: 0,
    },
    {
      sale: 39,
      img: "https://emartmall.com.vn/image/cache/catalog/products/8934563619138/8934563619138-1-200x200.jpg",
      name: "Mì Ly Modern Lẩu Thái Tôm 65G",
      price: 6700,
      priceOld: 8000,
    },
    {
      sale: 0,
      img: "https://emartmall.com.vn/image/cache/catalog/products/8934716010300/8934716010300-2210-200x200.jpg",
      name: "Nước Tinh Khiết Sapuwa 1.5L",
      price: 4500,
      priceOld: 7400,
    },
    {
      sale: 8,
      img: "https://emartmall.com.vn/image/cache/catalog/products/8934588732119/8934588732119-2209a-200x200.jpg",
      name: "Nước Tinh Khiết Sapuwa 1.5L",
      price: 8200,
      priceOld: 8900,
    },
    {
      sale: 51,
      img: "https://emartmall.com.vn/image/cache/catalog/products/8938501671073/8938501671073-1-200x200.jpg",
      name: "Nước Khoáng Thiên Nhiên Miocen 1L",
      price: 4800,
      priceOld: 9700,
    },
    {
      sale: 20,
      img: "https://emartmall.com.vn/image/cache/catalog/products/8934564600869/8934564600869-200x200.jpg",
      name: "Trà Đen C2 Hương Dâu Anh Đào 455Ml",
      price: 6800,
      priceOld: 8500,
    },
    {
      sale: 41,
      img: "https://emartmall.com.vn/image/cache/catalog/products/078895155327/078895155327-200x200.jpg",
      name: "Dầu Hào Kum Chun Lee Kum Kee Chai 510G",
      price: 13900,
      priceOld: 23700,
    },
    {
      sale: 18,
      img: "https://emartmall.com.vn/image/cache/catalog/products/8935049501596/8935049501596%20-%202208-200x200.jpg",
      name: "Nước Soda Schweppes Lon 320Ml",
      price: 4900,
      priceOld: 6000,
    },
    {
      sale: 1,
      img: "https://emartmall.com.vn/image/cache/catalog/products/8934822104337/8934822104337-2104-200x200.jpg",
      name: "Bia Tiger Thùng 24 Lon 330Ml",
      price: 355000,
      priceOld: 357000,
    },
  ];

  return (
    <section className="wrapper-sale">
      <div className="best-selling">
        <h3 className="title">Best Selling</h3>
        <div className="list-item">
          <Swiper
            slidesPerView={6}
            slidesPerGroup={6}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              1200: {
                width: 1200,
                slidesPerView: 6,
              },
              768: {
                width: 768,
                slidesPerView: 3,
                spaceBetween: 40,
              },
              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="item">
                    <Link to="/detail" className="img">
                      <img src={item.img} alt="" />
                      {item.sale > 0 && (
                        <span className="sale">{item.sale}%</span>
                      )}
                    </Link>
                    <div className="name">
                      <Link to="/detail">{item.name}</Link>
                    </div>
                    <div className="price-wishlist">
                      <div className="price">
                        {item.priceOld > 0 && (
                          <span className="old">
                            {castToVND(item.priceOld)}
                          </span>
                        )}
                        <span className="new">{castToVND(item.price)}</span>
                      </div>
                      <div className="wishlist">
                        <button>
                          <HeartOutlined />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
