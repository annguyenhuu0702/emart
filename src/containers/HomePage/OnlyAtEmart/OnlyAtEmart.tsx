import Product from "../../../components/Product/Product";
import "../__homepage.scss";

interface Propsdata {
  src: string;
  name: string;
  price: number;
  priceOld: number;
  sale: number;
}

const OnlyAtEmart = () => {
  const data: Propsdata[] = [
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/8938516870713/8938516870713-2210-200x200.jpg",
      name: "Gạo Thơm Neptune Đặc Sản ST25 5Kg ",
      price: 139000,
      priceOld: 249000,
      sale: 44,
    },
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/2340600000000/2340600000000-200x200.jpg",
      name: "Nạm Bò 700G",
      price: 128100,
      priceOld: 139300,
      sale: 8,
    },
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/078895152869/078895152869-200x200.jpg",
      name: "Nước Tương Đậu Nành Lee Kum Kee 500Ml",
      price: 16500,
      priceOld: 23800,
      sale: 31,
    },
  ];
  return (
    <section className="product-banner-wrap">
      <div className="product-banner">
        <div className="title">
          <h3>ONLY AT EMART</h3>
        </div>
        <div className="content">
          <div className="banner">
            <a href=" ">
              <img
                src="https://emartmall.com.vn/image/catalog/Banner/1.1.%20POST/2210/Promotion/500x440%20-%20promotion.jpg"
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

export default OnlyAtEmart;
