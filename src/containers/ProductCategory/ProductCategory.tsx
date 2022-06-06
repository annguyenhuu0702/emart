import { Link } from "react-router-dom";
import Product from "../../components/Product/Product";
import "./__productcategory.scss";
import { Pagination, Select } from "antd";

interface typeData {
  sale: number;
  src: string;
  name: string;
  price: number;
  priceOld: number;
}

const ProductCategory = () => {
  const data: typeData[] = [
    {
      sale: 23,
      src: "https://emartmall.com.vn/image/cache/catalog/products/8997035601321/8997035601321-200x200.jpg",
      name: "Nước Uống Pocari Sweat Chai 900Ml",
      price: 19900,
      priceOld: 25700,
    },
    {
      sale: 20,
      src: "https://emartmall.com.vn/image/cache/catalog/products/8934564600357/8934564600357-2210-200x200.jpg",
      name: "Trà xanh C2 Chanh 455Ml",
      price: 6800,
      priceOld: 8500,
    },
    {
      sale: 0,
      src: "https://emartmall.com.vn/image/cache/catalog/products/089686010947/089686010947_1901-200x200.jpg",
      name: "Mì Goreng Đặc Biệt Gói 85G",
      price: 4700,
      priceOld: 0,
    },
    {
      sale: 16,
      src: "https://emartmall.com.vn/image/cache/catalog/products/089686043686/089686043686_1901-200x200.jpg",
      name: "Mì Goreng Rasa Iga Penyet Vị Sườn 80G",
      price: 4700,
      priceOld: 0,
    },
    {
      sale: 39,
      src: "https://emartmall.com.vn/image/cache/catalog/products/8934563619138/8934563619138-1-200x200.jpg",
      name: "Mì Ly Modern Lẩu Thái Tôm 65G",
      price: 6700,
      priceOld: 8000,
    },
    {
      sale: 0,
      src: "https://emartmall.com.vn/image/cache/catalog/products/8934716010300/8934716010300-2210-200x200.jpg",
      name: "Nước Tinh Khiết Sapuwa 1.5L",
      price: 4500,
      priceOld: 7400,
    },
    {
      sale: 8,
      src: "https://emartmall.com.vn/image/cache/catalog/products/8934588732119/8934588732119-2209a-200x200.jpg",
      name: "Nước Tinh Khiết Sapuwa 1.5L",
      price: 8200,
      priceOld: 8900,
    },
    {
      sale: 51,
      src: "https://emartmall.com.vn/image/cache/catalog/products/8938501671073/8938501671073-1-200x200.jpg",
      name: "Nước Khoáng Thiên Nhiên Miocen 1L",
      price: 4800,
      priceOld: 9700,
    },
    {
      sale: 20,
      src: "https://emartmall.com.vn/image/cache/catalog/products/8934564600869/8934564600869-200x200.jpg",
      name: "Trà Đen C2 Hương Dâu Anh Đào 455Ml",
      price: 6800,
      priceOld: 8500,
    },
    {
      sale: 41,
      src: "https://emartmall.com.vn/image/cache/catalog/products/078895155327/078895155327-200x200.jpg",
      name: "Dầu Hào Kum Chun Lee Kum Kee Chai 510G",
      price: 13900,
      priceOld: 23700,
    },
    {
      sale: 18,
      src: "https://emartmall.com.vn/image/cache/catalog/products/8935049501596/8935049501596%20-%202208-200x200.jpg",
      name: "Nước Soda Schweppes Lon 320Ml",
      price: 4900,
      priceOld: 6000,
    },
    {
      sale: 1,
      src: "https://emartmall.com.vn/image/cache/catalog/products/8934822104337/8934822104337-2104-200x200.jpg",
      name: "Bia Tiger Thùng 24 Lon 330Ml",
      price: 355000,
      priceOld: 357000,
    },
  ];
  return (
    <div className="product-category">
      <div className="main">
        <div className="breadcrumb">
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <a href=" ">Deli & Bakery</a>
            </li>
            <li>
              <a href=" ">Deli & Bakery</a>
            </li>
          </ul>
        </div>
        <div className="product-filter-panel">
          <div className="title">
            <h1>Deli & Bakery</h1>
          </div>
          <div className="sort-product">
            <label>Sort By:</label>
            <div className="list-sort">
              <Select
                defaultValue="Default"
                style={{
                  width: "160px",
                  marginLeft: "6px",
                  fontSize: "1.3rem",
                }}
              >
                <Select.Option value="default">Default</Select.Option>
                <Select.Option value="nameA-Z">Name (A-Z)</Select.Option>
                <Select.Option value="nameZ-A">Name (Z-A)</Select.Option>
                <Select.Option value="priceLownHigh)">
                  Price (Low &gt; High)
                </Select.Option>
                <Select.Option value="priceHighLow)">
                  Price (High &gt; Low)
                </Select.Option>
                <Select.Option value="ratingHighest">
                  Rating (Highest)
                </Select.Option>
                <Select.Option value="ratingLowest">
                  Rating (Lowest)
                </Select.Option>
                <Select.Option value="bestSelling">Best Selling</Select.Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="products">
          <Product data={data} lg={5} md={8} xs={12} />
        </div>
        <div className="pagination">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
