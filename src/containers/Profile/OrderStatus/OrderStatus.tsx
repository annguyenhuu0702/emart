import { Link } from "react-router-dom";
import "./index.scss";
const OrderStatus = () => {
  return (
    <div className="content-right order-status">
      <h3>
        <img
          src="https://emartmall.com.vn/image/catalog/icon/icon_delevery.png"
          alt=""
        />
        <Link to="/account/order-history">Order / Shipping</Link>
      </h3>
      <div className="order-delivery">
        <div className="step">
          <h5>0</h5>
          <p>Order Submitted</p>
        </div>
        <div className="step-two">
          <i className="fa fa-long-arrow-right"></i>
        </div>
        <div className="step">
          <h5>0</h5>
          <p>Checking Goods</p>
        </div>
        <div className="step-two">
          <i className="fa fa-long-arrow-right"></i>
        </div>
        <div className="step">
          <h5>0</h5>
          <p>Packing Completed</p>
        </div>
        <div className="step-two">
          <i className="fa fa-long-arrow-right"></i>
        </div>
        <div className="step">
          <h5>0</h5>
          <p>Shipping</p>
        </div>
        <div className="step-two">
          <i className="fa fa-long-arrow-right"></i>
        </div>
        <div className="step">
          <h5>0</h5>
          <p>Delivery Completed</p>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
