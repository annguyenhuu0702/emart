import "./__header.scss";
import { Row, Col } from "antd";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const data: any = [
    {
      category: "Promotion",
      src: "https://emartmall.com.vn/image/cache/catalog/icon/NewIcon0418/01-KhuyenMai-100x100-50x50.png",
      subCategories: [],
    },
    {
      category: "Deli & Bakery",
      src: "https://emartmall.com.vn/image/cache/catalog/category/category-desktop/vertical-menu/02-Banh-50x50.png",
      subCategories: [
        {
          name: "Bakery",
          items: [
            {
              name: "Bread",
            },
          ],
        },
        {
          name: "Deli",
          items: [
            {
              name: "Korean Dish",
            },
            {
              name: "Side Dish",
            },
            {
              name: "Kimbab Set",
            },
            {
              name: "Salad",
            },
            {
              name: "Baverages",
            },
          ],
        },
      ],
    },
    {
      category: "Fresh Food",
      src: "https://emartmall.com.vn/image/cache/catalog/category/category-desktop/vertical-menu/03-ThucPhamSach-50x50.png",
      subCategories: [
        {
          name: "Fruit",
          items: [
            {
              name: "Korean Fruit",
            },
            {
              name: "Imported Fruit",
            },
            {
              name: "Local Fruit",
            },
          ],
        },
        {
          name: "Vegetables",
          items: [
            {
              name: "Leaf",
            },
            {
              name: "Fruit",
            },
            {
              name: "Root",
            },
            {
              name: "Mushroom",
            },
            {
              name: "Tofu",
            },
            {
              name: "Gap",
            },
            {
              name: "Organic",
            },
          ],
        },
        {
          name: "Dried Food",
          items: [
            {
              name: "RICE",
            },
            {
              name: "Jelly & Candy",
            },
            {
              name: "Fruit",
            },
            {
              name: "Vegetables",
            },
            {
              name: "Meat",
            },
            {
              name: "Gap",
            },
            {
              name: "Seafoods",
            },
            {
              name: "Nuts",
            },
          ],
        },
        {
          name: "EGG/MEAT/FISH",
          items: [
            {
              name: "Egg",
            },
            {
              name: "Beef",
            },
            {
              name: "Pork",
            },
            {
              name: "Chicken",
            },
            {
              name: "Seafood",
            },
          ],
        },
        {
          name: "RICE & NUTS",
          items: [],
        },
      ],
    },
    {
      category: "EXCLUSIVE BRAND",
      src: "https://emartmall.com.vn/image/cache/catalog/category/category-desktop/vertical-menu/04-ThuongHieuDocQuyen-50x50.png",
      subCategories: [
        {
          name: "NO BRAND",
          items: [
            {
              name: "Snack & Drinks",
            },
            {
              name: "Instant & Canned",
            },
            {
              name: "Sauce & Seasonings",
            },
            {
              name: "Cosmetics",
            },
            {
              name: "Home & Living",
            },
          ],
        },
        {
          name: "EMART",
          items: [],
        },
        {
          name: "LOVING HOME",
          items: [],
        },
      ],
    },
    {
      category: "Korean Product",
      src: "https://emartmall.com.vn/image/cache/catalog/category/category-desktop/vertical-menu/05-SPHanQuoc-50x50.png",
      subCategories: [
        {
          name: "FOOD",
          items: [
            {
              name: "Milk",
            },
            {
              name: "Drink",
            },
            {
              name: "Snack & Candies",
            },
            {
              name: "Seaweed",
            },
            {
              name: "Instant & Canned",
            },
            {
              name: "Nutrious Food",
            },
            {
              name: "Sauce & Seasonings",
            },
          ],
        },
        {
          name: "HBA & COSMETICS",
          items: [
            {
              name: "Parapharmacy",
            },
            {
              name: "Oral Care",
            },
            {
              name: "Face Care",
            },
            {
              name: "Hair Care",
            },
            {
              name: "Body Care",
            },
            {
              name: "Other Product",
            },
          ],
        },
        { name: "", items: [] },
        {
          name: "HOME",
          items: [
            {
              name: "Laundry",
            },
            {
              name: "Cleaning",
            },
            {
              name: "Paper",
            },
            {
              name: "Kitchen",
            },
            {
              name: "Bath",
            },
            {
              name: "Toys & Stationary",
            },
          ],
        },
        {
          name: "LIVING",
          items: [
            {
              name: "Electric Appliances",
            },
            {
              name: "Bedding",
            },
            {
              name: "Home Decor",
            },
          ],
        },
        {
          name: "OTHER PRODUCT",
          items: [],
        },
      ],
    },
    {
      category: "GROCERY",
      src: "https://emartmall.com.vn/image/cache/catalog/category/category-desktop/vertical-menu/07-BachHoa-50x50.png",
      subCategories: [
        {
          name: "MILK",
          items: [],
        },
        {
          name: "BEVERAGES",
          items: [
            {
              name: "Drink",
            },
            {
              name: "Tea & Coffee",
            },
            {
              name: "Alcohol",
            },
          ],
        },
        {
          name: "SAUCE & SEASONINGS",
          items: [],
        },
        {
          name: "OTHER PRODUCT",
          items: [],
        },
        {
          name: "SNACK & CANDIES",
          items: [],
        },
        {
          name: "INSTANT & CANNED",
          items: [],
        },
        {
          name: "NUTRIOUS FOOD",
          items: [],
        },
        {
          name: "REFRIGERATED FOOD",
          items: [],
        },
        {
          name: "FROZEN FOOD",
          items: [],
        },
      ],
    },
    {
      category: "Home & Living",
      src: "https://emartmall.com.vn/image/cache/catalog/category/category-desktop/vertical-menu/06-NhaCua-50x50.png",
      subCategories: [
        {
          name: "HOME",
          items: [
            {
              name: "Laundry",
            },
            {
              name: "Cleaning",
            },
            {
              name: "Room Spray And Wax",
            },
            {
              name: "Paper",
            },
            {
              name: "Kitchen",
            },
            {
              name: "Bath",
            },
          ],
        },
        {
          name: "IT & TECHNOLOGY",
          items: [
            {
              name: "Accessories",
            },
            {
              name: "Home Electronic",
            },
            {
              name: "Digital",
            },
          ],
        },
        {
          name: "LIVING",
          items: [
            {
              name: "Electric Appliances",
            },
            {
              name: "Parapharmacy",
            },
            {
              name: "Bedding",
            },
            {
              name: "Home Decor",
            },
            {
              name: "Flower",
            },
            {
              name: "Accessories",
            },
            {
              name: "Toys",
            },
            {
              name: "Stationary",
            },
          ],
        },
        {
          name: "SPORTS",
          items: [],
        },
        {
          name: "OTHER PRODUCT",
          items: [],
        },
      ],
    },
    {
      category: "Beautiful care",
      src: "https://emartmall.com.vn/image/cache/catalog/category/category-desktop/vertical-menu/09-LamDep-50x50.png",
      subCategories: [
        {
          name: "ORAL CARE",
          items: [],
        },
        {
          name: "FACE CARE",
          items: [],
        },
        {
          name: "HAIR CARE",
          items: [],
        },
        {
          name: "BODY CARE",
          items: [],
        },
        {
          name: "MAKE UP",
          items: [],
        },
        {
          name: "OTHER PRODUCT",
          items: [],
        },
      ],
    },
    {
      category: "Mom and kids",
      src: "https://emartmall.com.vn/image/cache/catalog/category/category-desktop/vertical-menu/08-MevaBe-50x50.png",
      subCategories: [
        {
          name: "BABY FOOD",
          items: [{ name: "Milk" }, { name: "Food" }],
        },
        {
          name: "BABY CARE",
          items: [
            { name: "Baby Cleaning" },
            { name: "Baby Skin Care" },
            { name: "Accessories" },
          ],
        },
        {
          name: "BABY DIAPERS",
          items: [{ name: "Taped Diapers" }, { name: "Pants Diapers" }],
        },
        {
          name: "BABY LAUNDRY",
          items: [],
        },
        {
          name: "BABY FASHION",
          items: [],
        },
        {
          name: "OTHER PRODUCT",
          items: [],
        },
      ],
    },
  ];

  const [, setReMenu] = useState<boolean>(false);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    setReMenu(true);
  }, []);

  return (
    <header>
      <nav className="navbar">
        <Row>
          <Col lg={24} md={24} xs={24}>
            <div className="wrap-navbar">
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://emartmall.com.vn/image/catalog/icon/logo.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="verticalmenu">
                <h4 className="title">
                  <MenuOutlined className="icon" />
                  Departments
                </h4>
                <div className="pav-veticalmenu">
                  <ul className="list-menu">
                    {data &&
                      data.map((data: any, index: number) => {
                        return (
                          <li className="menu-item" key={index}>
                            <img src={data.src} alt="" />
                            <Link to="/category">{data.category}</Link>
                            {data.subCategories.length > 0 && (
                              <div className="dropdown parent">
                                <Row>
                                  {data.subCategories.map(
                                    (subcate: any, index: number) => {
                                      return (
                                        <Col lg={12} key={index}>
                                          <ul>
                                            <li>
                                              <Link to="/category">
                                                {subcate.name}
                                              </Link>
                                              <ul>
                                                {subcate.items.map(
                                                  (
                                                    item: any,
                                                    index: number
                                                  ) => {
                                                    return (
                                                      <li key={index}>
                                                        <Link to="/category">
                                                          {item.name}
                                                        </Link>
                                                      </li>
                                                    );
                                                  }
                                                )}
                                              </ul>
                                            </li>
                                          </ul>
                                        </Col>
                                      );
                                    }
                                  )}
                                </Row>
                              </div>
                            )}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              <div className="nav-tabletmobile">
                <div className="logoTM">
                  <Link to="/">
                    <img
                      src="https://emartmall.com.vn/image/catalog/icon/logo.png"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="account-block-TM">
                  <ul>
                    <li className="cart">
                      <Link to="cart">
                        <img
                          src="https://emartmall.com.vn/image/cache/shopping-cart-30x30.png"
                          alt=""
                        />
                      </Link>
                    </li>
                    <li className="wish-list">
                      <Link to="/wishlist">
                        <i className="fa-solid fa-heart"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="search">
                <input
                  type="text"
                  name=""
                  className="input-search"
                  placeholder="Search..."
                />
                <SearchOutlined className="icon-search" />
              </div>
              <div className="account-block">
                <ul>
                  <li className="login">
                    <Link to="/login">
                      <i className="fa fa-user"></i>
                      Please Login
                    </Link>
                    <ul className="account-info">
                      <li>
                        Hi,<span>Nguyễn Hữu An</span>
                      </li>
                      <li
                        onClick={() => {
                          navigate("/account/order-history");
                        }}
                      >
                        <div>Order List</div>
                      </li>
                      <li
                        onClick={() => {
                          navigate("/account");
                        }}
                      >
                        <div>Account management</div>
                      </li>
                      <li>
                        <div>Logout</div>
                      </li>
                    </ul>
                  </li>
                  <li className="cart">
                    <Link to="/cart">
                      <img
                        src="https://emartmall.com.vn/image/cache/shopping-cart-30x30.png"
                        alt=""
                      />
                      Cart
                    </Link>
                  </li>
                  <li className="wish-list">
                    <Link to="/wishlist">
                      <i className="fa fa-heart"> </i>
                      Wish List
                    </Link>
                  </li>
                  <li className="language">
                    <a href=" ">
                      <i className="fa-solid fa-earth-americas"></i>
                      Vietnamese
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </nav>
      <div className="navmenu-tabletmobile">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          loop={true}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            820: {
              width: 820,
              slidesPerView: 4,
              slidesPerGroup: 1,
            },
          }}
        >
          <SwiperSlide>
            <a href=" ">HOME</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href=" ">ONLY EMARTMALL</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href=" ">HAPPY CHILDREN'S DAY</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href=" ">PROMOTION</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href=" ">ORGANIC FOOD</a>
          </SwiperSlide>
          <SwiperSlide>
            <a href=" ">FRUIT & VEGETABLE</a>
          </SwiperSlide>
          <button ref={navigationPrevRef} className="btn-prev">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button ref={navigationNextRef} className="btn-next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </Swiper>
      </div>
    </header>
  );
};

export default Header;
