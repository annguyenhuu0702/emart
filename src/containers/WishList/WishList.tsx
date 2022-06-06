import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import "./__wishlist.scss";
const WishList = () => {
  return (
    <div className="wish-list-wrap">
      <div className="wish-list">
        <div className="title">
          <h1>My Wish List</h1>
        </div>
        <div className="info-bar">
          <Row>
            <Col lg={3} md={3} className="image">
              <span>Image</span>
            </Col>
            <Col lg={5} md={5} className="product-name">
              <span>Product name</span>
            </Col>
            <Col lg={5} md={5} className="model">
              <span>Model</span>
            </Col>
            <Col lg={3} md={3} className="stock">
              <span>Stock</span>
            </Col>
            <Col lg={3} md={3} className="unit-price">
              <span>Unit Price</span>
            </Col>
            <Col lg={5} md={5} className="action">
              <span>Action</span>
            </Col>
          </Row>
        </div>
        <div className="product-item">
          <Row>
            <Col lg={3} md={3} className="image">
              <img
                src="https://emartmall.com.vn/image/cache/catalog/products/8936121050025/8936121050025%20(2)-90x69.jpg"
                alt=""
              />
            </Col>
            <Col lg={5} md={5} className="product-name">
              <span>
                Gạo Làng Ta Vua Gạo 5Kg Gạo Làng Ta Vua Gạo 5Kg Gạo Làng Ta Vua
                Gạo 5Kg
              </span>
            </Col>
            <Col lg={5} md={5} className="model">
              <span>000000000000102821</span>
            </Col>
            <Col lg={3} md={3} className="stock">
              <span> In Stock</span>
            </Col>
            <Col lg={3} md={3} className="unit-price">
              <span>118,000₫</span>
            </Col>
            <Col lg={5} md={5} className="action">
              <div className="btn-wrap">
                <Button type="primary" className="add-to-cart">
                  add to cart
                </Button>
                <Button icon={<DeleteOutlined />} className="remove"></Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="product-item">
          <Row>
            <Col lg={3} md={3} className="image">
              <img
                src="https://emartmall.com.vn/image/cache/catalog/products/8936121050025/8936121050025%20(2)-90x69.jpg"
                alt=""
              />
            </Col>
            <Col lg={5} md={5} className="product-name">
              <span>Gạo Làng Ta Vua Gạo 5Kg</span>
            </Col>
            <Col lg={5} md={5} className="model">
              <span>000000000000102821</span>
            </Col>
            <Col lg={3} md={3} className="stock">
              <span> In Stock</span>
            </Col>
            <Col lg={3} md={3} className="unit-price">
              <span>118,000₫</span>
            </Col>
            <Col lg={5} md={5} className="action">
              <div className="btn-wrap">
                <Button type="primary" className="add-to-cart">
                  add to cart
                </Button>
                <Button icon={<DeleteOutlined />} className="remove"></Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="btn-contiue">
          <Button type="primary" className="continue">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishList;
