import Product from "../../../components/Product/Product";
import "../__homepage.scss";

interface Propsdata {
  src: string;
  name: string;
  price: number;
  priceOld: number;
  sale: number;
}
const KoreanProduct = () => {
  const data: Propsdata[] = [
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/8801654004244/8801654004244-200x200.jpg",
      name: "Lô 3 Rong Biển No Brand Tẩm Dầu Ôliu Gói 4G",
      price: 15000,
      priceOld: 17800,
      sale: 16,
    },
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/8801007053134/8801007053134-2113-200x200.jpg",
      name: "Tương Chấm Thịt Nướng Ssamjang CJ Hộp 450G",
      price: 43500,
      priceOld: 68600,
      sale: 32,
    },
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/8801073310681/8801073310681_1-200x200.jpg",
      name: "Bánh Xốp Ngũ Cốc Nhân Phô Mai Samyang 80G",
      price: 42900,
      priceOld: 56500,
      sale: 24,
    },
  ];
  return (
    <section className="product-banner-wrap">
      <div className="product-banner">
        <div className="title">
          <h3>Korean Products</h3>
        </div>
        <div className="content">
          <div className="banner">
            <a href=" ">
              <img
                src="https://emartmall.com.vn/image/catalog/Banner/1.2.%20CO%20DINH/BannerNoBrand-Emartmall_At_I%20Like%20K-food-02500x440.jpg"
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

export default KoreanProduct;
