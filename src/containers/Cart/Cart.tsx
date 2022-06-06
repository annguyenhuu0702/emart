import { useNavigate } from "react-router-dom";
import Stepper from "../../components/Stepper/Stepper";
import { castToVND } from "../../utils";
import "./__cart.scss";
const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="cart-wrap">
      <div className="shopping-part">
        <Stepper />
      </div>
      <div className="cart">
        <div className="main-cart">
          <form action="">
            <div className="product-cart">
              <ul>
                <li className="remove-all">
                  <div className="check-product">
                    <label htmlFor="">
                      <input type="checkbox" />
                    </label>
                  </div>
                  <button type="button" className="btn-delete-all">
                    Remove
                  </button>
                </li>
                <li>
                  <div className="check-product">
                    <label htmlFor="">
                      <input type="checkbox" />
                    </label>
                  </div>
                  <div className="img-cart">
                    <img
                      src="https://emartmall.com.vn/image/cache/catalog/products/8938507729303/8938507729303-1-90x90.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info-cart">
                    <div className="title-product-cart">
                      <div className="name">
                        <a href=" ">Khăn Giấy Lụa Vinatissue 280 Tờ</a>
                      </div>
                      <div className="price">
                        <span>{castToVND(20000)}</span>
                      </div>
                    </div>
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
                    <div className="total-price">{castToVND(100000)}</div>
                  </div>
                </li>
                <li>
                  <div className="check-product">
                    <label htmlFor="">
                      <input type="checkbox" />
                    </label>
                  </div>
                  <div className="img-cart">
                    <img
                      src="https://emartmall.com.vn/image/cache/catalog/products/8938507729303/8938507729303-1-90x90.jpg"
                      alt=""
                    />
                  </div>
                  <div className="info-cart">
                    <div className="title-product-cart">
                      <div className="name">
                        <a href=" ">Khăn Giấy Lụa Vinatissue 280 Tờ</a>
                      </div>
                      <div className="price">
                        <span>{castToVND(20000)}</span>
                      </div>
                    </div>
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
                    <div className="total-price">{castToVND(100000)}</div>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div className="right-cart">
          <div className="cart-total">
            <ul>
              <li>
                <span className="title">Item total amount</span>
                <span>{castToVND(93500)}</span>
              </li>
              <li>
                <span className="title">Discounts on product prices</span>
                <span>-{castToVND(1000)}</span>
              </li>
              <li>
                <span className="title">Total amount after discounts</span>
                <span>{castToVND(92500)}</span>
              </li>
              <li>
                <span className="title">Total</span>
                <span className="total-price">{castToVND(93500)}</span>
              </li>
            </ul>
          </div>
          <div
            className="btn-checkout"
            onClick={() => {
              navigate("/order");
            }}
          >
            <button type="button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
