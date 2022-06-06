import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { castToVND } from "../../utils";
import Product from "../../components/Product/Product";
import DetailTab from "./DetailTab/DetailTab";
import "./__productDetail.scss";

interface Propsdata {
  src: string;
  name: string;
  price: number;
  priceOld: number;
  sale: number;
}

const ProductDetail = () => {
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
    {
      src: "https://emartmall.com.vn/image/cache/catalog/products/8801073310681/8801073310681_1-200x200.jpg",
      name: "Bánh Xốp Ngũ Cốc Nhân Phô Mai Samyang 80G",
      price: 42900,
      priceOld: 56500,
      sale: 24,
    },
  ];
  return (
    <div className="product-detail">
      <div className="main">
        <div className="breadcrumbs">
          <Row>
            <Col lg={24} md={24} xs={24}>
              <ul>
                <li>
                  <Link to="/">Home Page</Link>
                </li>
                <li>
                  <a href=" ">NƯỚC KHOÁNG THIÊN NHIÊN MIOCEN 1L</a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="content">
          <Row>
            <Col lg={9} md={12} xs={24}>
              <div className="image">
                <img
                  src="https://emartmall.com.vn/image/cache/catalog/products/8938501671073/8938501671073-1-600x600.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={8} md={12} xs={24}>
              <div className="info-product">
                <div className="name">
                  <span>Nước khoáng thiên nhiên Miconren 1L</span>
                </div>
                <div className="wrapPC">
                  <div className="price">
                    <span className="price-old">{castToVND(4800)}</span>
                    <span className="price-current">{castToVND(9700)}</span>
                  </div>
                  <div className="contact">
                    <ul>
                      <li
                        style={{
                          background: "rgb(59, 89, 152)",
                          borderRadius: "4px",
                          padding: "5px 10px",
                        }}
                      >
                        <a href=" ">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li
                        style={{
                          background: "rgb(29, 161, 242)",
                          borderRadius: "4px",
                          padding: "5px 10px",
                        }}
                      >
                        <a href=" ">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li
                        style={{
                          background: "rgb(203, 32, 39)",
                          borderRadius: "4px",
                          padding: "5px 10px",
                        }}
                      >
                        <a href=" ">
                          <i className="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                      <li
                        style={{
                          background: "rgb(12, 168, 236)",
                          borderRadius: "4px",
                          padding: "5px 10px",
                        }}
                      >
                        <a href=" ">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rating">
                  <span>
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-star"></i>
                  </span>
                  <a href=" " className="common-view review">
                    <span>0 reviews</span>
                    <span> / </span>
                  </a>
                  <a href=" " className="common-view write-review">
                    <span>Write a review</span>
                  </a>
                </div>
                <div className="option-product">
                  <div className="quantity">
                    <span className="minus">
                      <i className="fa-solid fa-minus"></i>
                    </span>
                    <div className="input-qtt">
                      <input type="text" value={1} onChange={() => {}} />
                    </div>
                    <span className="plus">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </div>
                  <div className="cart">
                    <div className="common-btn add-cart">
                      <button>
                        <i
                          className="fa-solid fa-bag-shopping"
                          style={{
                            margin: "0 8px",
                          }}
                        ></i>
                        Add to cart
                      </button>
                    </div>
                    <div className="common-btn buy-now">
                      <button>
                        <i
                          className="fa-solid fa-basket-shopping"
                          style={{
                            margin: "0 8px",
                          }}
                        ></i>
                        Buy now
                      </button>
                    </div>
                    <div className="common-btn wishlist">
                      <button>
                        <i
                          className="fa-solid fa-heart"
                          style={{
                            fontSize: "16px",
                          }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="alert-info">
                  <i
                    className="fa-solid fa-circle-info"
                    style={{
                      marginRight: "10px",
                    }}
                  ></i>
                  Max quantity per day is 12
                </div>
              </div>
            </Col>
            <Col lg={7} md={24} xs={24}>
              <div className="policy">
                <h3>SHIPPING POLICY</h3>
                <div className="info"></div>
                <ul>
                  <li>
                    <i>
                      <img
                        src="https://emartmall.com.vn/image/catalog/icon/icon-1.png"
                        alt=""
                      />
                    </i>
                    <span>
                      Shipping distance less than 5km: free shipping for orders
                      over 300,000 VND
                      <br />
                      Shipping distance over than 5km: free shipping for orders
                      over 500,000 VND
                      <br />
                      Delivery fee for shipping distance: 5,000 VND/km.
                    </span>
                  </li>
                  <li>
                    <i>
                      <img
                        src="https://emartmall.com.vn/image/catalog/icon/icon-5.png"
                        alt=""
                      />
                    </i>
                    <span>
                      Orders placed before 17:00 will process and delivery
                      within the day. Orders placed after 17:00 will be
                      processed the next day.
                    </span>
                  </li>
                  <li>
                    <i>
                      <img
                        src="https://emartmall.com.vn/image/catalog/icon/icon-3.png"
                        alt=""
                      />
                    </i>
                    <span>
                      Delivery area within Ho Chi Minh City (detail please see
                      Delivery Policy).
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="tab-group">
        <DetailTab />
      </div>
      <div className="related-product">
        <h3>Related Products</h3>
        <>
          <Product data={data} lg={6} md={6} xs={12} />
        </>
      </div>
    </div>
  );
};

export default ProductDetail;
