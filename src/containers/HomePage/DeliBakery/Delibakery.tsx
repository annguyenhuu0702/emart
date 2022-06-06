import Product from "../../../components/Product/Product";
// import "./__delibakery.scss";
import "../__homepage.scss";

interface Propsdata {
  src: string;
  name: string;
  price: number;
  priceOld: number;
  sale: number;
}
const DeliBakery = () => {
  const data: Propsdata[] = [
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/2354080000000/2354080000000-200x200.jpg",
      name: "Set Cơm Phần Hàn Quốc Thịt Heo Xào Cay",
      price: 49000,
      priceOld: 0,
      sale: 0,
    },
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/2356730000000/2356730000000-200x200.jpg",
      name: "Set 5 Bánh Cá Su Kem",
      price: 28000,
      priceOld: 0,
      sale: 0,
    },
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/2311290000000%20new/2311290000000_1-200x200.jpg",
      name: "Hộp 6 Bánh Baby Choux 35G",
      price: 16800,
      priceOld: 0,
      sale: 0,
    },
  ];
  return (
    <section className="product-banner-wrap">
      <div className="product-banner">
        <div className="title">
          <h3>Deli & Bakery</h3>
        </div>
        <div className="content">
          <div className="banner">
            <a href=" ">
              <img
                src="https://emartmall.com.vn/image/catalog/Banner/1.1.%20POST/2018/500x440_THIENDUONGAMTHUC%20NEW.png"
                alt=""
              />
            </a>
          </div>
          <Product data={data} lg={8} md={8} xs={8} />
        </div>
      </div>
    </section>
  );
};

export default DeliBakery;
