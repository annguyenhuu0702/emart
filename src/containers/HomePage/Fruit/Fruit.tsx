import Product from "../../../components/Product/Product";
import "../__homepage.scss";

interface Propsdata {
  src: string;
  name: string;
  price: number;
  priceOld: number;
  sale: number;
}
const Fruit = () => {
  const data: Propsdata[] = [
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/8935268200775/8935268200775_10-200x200.jpg",
      name: "Cam Sành Global Gap Túi 1Kg (3-4 Trái)",
      price: 48000,
      priceOld: 0,
      sale: 0,
    },
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/8936111240092/8936111240092-200x200.jpg",
      name: "Khoai Lang Nhật Ant Farm Túi 1Kg",
      price: 29900,
      priceOld: 39500,
      sale: 24,
    },
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/2050000492693/2050000492693-200x200.jpg",
      name: "Táo Gala Nam Phi Túi 3Kg",
      price: 189000,
      priceOld: 0,
      sale: 0,
    },
  ];
  return (
    <section className="product-banner-wrap">
      <div className="product-banner">
        <div className="title">
          <h3>Fruit & Vegetables</h3>
        </div>
        <div className="content">
          <div className="banner">
            <a href=" ">
              <img
                src="https://emartmall.com.vn/image/catalog/Banner/1.1.%20POST/2207/1923_Banner_Thuc_Pham_Tuoi_Song_03_500x440.jpg"
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

export default Fruit;
