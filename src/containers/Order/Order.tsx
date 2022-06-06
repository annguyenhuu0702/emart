import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import Stepper from "../../components/Stepper/Stepper";
import TotalAmount from "./TotalAmount/TotalAmount";
import "./__order.scss";

const Order = () => {
  interface IUser {
    fullname?: string;
    birthday?: string;
    gender?: string;
    email?: string;
    phonenumber?: string;
    city?: string;
    district?: string;
    ward?: string;
    address?: string;
  }

  const [user, setUser] = useState<IUser>({
    fullname: "NGUYEN HUU AN",
    birthday: "27-09-2000",
    gender: "Male",
    email: "Nguyenhuuan2727@gmail.com",
    phonenumber: "0384974745",
    city: "Hồ Chí Minh",
    district: "Thủ Đức",
    ward: "Linh Trung",
    address: "Hồ Chí Minh",
  });
  const onFinish = () => {
    console.log(user);
  };
  return (
    <div className="check-cart">
      <div className="checkcart-wrap">
        <div className="shopping-cart">
          <Stepper />
        </div>
        <div className="payment-order">
          <div className="wrap-info">
            <div className="infocus-payment">
              <div className="content">
                <div className="panel-heading">
                  <h4>shipping infomation</h4>
                </div>
                <Form
                  onFinish={onFinish}
                  initialValues={user}
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 24 }}
                  autoComplete="off"
                >
                  <ul>
                    <li className="shipping active">
                      <input
                        type="radio"
                        name="shipping"
                        checked
                        onChange={() => {}}
                      />
                      <label>
                        <i className="fa-solid fa-motorcycle"></i>
                        <span>Shipping</span>
                      </label>
                    </li>
                    <li className="pickup">
                      <input type="radio" name="shipping" />
                      <label>
                        <i className="fa-solid fa-house"></i>
                        <span>Pick Up</span>
                      </label>
                    </li>
                  </ul>
                  <div className="shipping">
                    <Form.Item style={{ margin: "8px 0" }} label="Shipping">
                      <Select
                        value={user.address}
                        onChange={(value) => {
                          setUser({ ...user, address: value });
                        }}
                      >
                        <Select.Option value="Hồ Chí Minh">
                          Hồ Chí Minh
                        </Select.Option>
                        <Select.Option value="Hà Nội">Hà Nội</Select.Option>
                      </Select>
                      <div className="newaddress">
                        <i className="fa-solid fa-plus"></i>
                        <span>New Address</span>
                      </div>
                    </Form.Item>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontSize: "1.2rem",
                        color: "#999",
                        marginRight: "8px",
                      }}
                    >
                      View
                    </span>
                    <a
                      href=" "
                      style={{
                        fontSize: "1.2rem",
                        color: "#f9b618",
                      }}
                    >
                      Shipping - Delivery Policy
                    </a>
                  </div>
                  <Form.Item
                    style={{ margin: "8px 0" }}
                    label="Receiver Name"
                    name="fullname"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input value={user.fullname} onChange={() => {}} />
                  </Form.Item>
                  <Form.Item
                    style={{ margin: "8px 0" }}
                    label="Mobile Number"
                    name="phonenumber"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      value={user.phonenumber}
                      maxLength={10}
                      onChange={() => {}}
                    />
                  </Form.Item>
                  <Form.Item
                    style={{ margin: "8px 0" }}
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input value={user.email} onChange={() => {}} />
                  </Form.Item>
                  <Form.Item
                    style={{ display: "flex", flexDirection: "column" }}
                    label="Delivery Time"
                    name="deliverytime"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <Select
                        defaultValue="Choose the date"
                        style={{
                          marginRight: "30px",
                        }}
                      >
                        <Select.Option value="Choose the date">
                          Choose the date
                        </Select.Option>
                      </Select>
                      <Select defaultValue="Choose the time">
                        <Select.Option value="Choose the time">
                          Choose the time
                        </Select.Option>
                      </Select>
                    </div>
                  </Form.Item>
                </Form>
                <div className="shipping-cost">
                  <span>Shipping cost</span>
                  <input type="radio" defaultChecked />
                  <label>Distance Based Shipping - 12,000₫</label>
                </div>
                <div className="vat-info">
                  <div className="title">
                    <h4>vat infomation</h4>
                  </div>
                  <div className="check-invoice">
                    <input type="checkbox" />
                    <span>Require VAT Invoice</span>
                    <p>
                      VAT invoice is only issued within the day after successful
                      delivery.
                    </p>
                  </div>
                </div>
                <div className="delivery-message">
                  <div className="title">
                    <h4>delivery message</h4>
                  </div>
                  <div className="option">
                    <Form.Item
                      style={{ margin: "8px 0" }}
                      label="Delivery message"
                    >
                      <Select defaultValue="Please select delivery message">
                        <Select.Option value="Please select delivery message">
                          Please select delivery message
                        </Select.Option>
                        <Select.Option value="Fragile goods, please be careful when shipping">
                          Fragile goods, please be careful when shipping.
                        </Select.Option>
                        <Select.Option value="Please call to inform expired date of product">
                          Please call to inform expired date of product
                        </Select.Option>
                        <Select.Option value="Please contact us before shipping">
                          Please contact us before shipping.
                        </Select.Option>
                        <Select.Option value="Please deliver during office hours">
                          Please deliver during office hours.
                        </Select.Option>
                        <Select.Option
                          value="The product may be damaged. Please be careful when
                          shipping"
                        >
                          The product may be damaged. Please be careful when
                          shipping.
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
            <div className="infocart-payment">
              <div className="emart-point">
                <div className="title">
                  <h4>Emart point usage</h4>
                </div>
                <div className="content">
                  <div className="use-point">
                    <span>Total points</span>
                    <div className="point">
                      <label>0</label>
                    </div>
                  </div>
                  <div className="use-point">
                    <span>Total points</span>
                    <div className="point">
                      <label>0</label>
                    </div>
                  </div>
                  <div className="use-point">
                    <span>Select Points for this Order:</span>
                    <div className="select-point">
                      <input disabled />
                      <span>
                        Please enter an even point of 100, minimum point is 200
                        and less than Item Subtotal Amount
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-method">
                <div className="title">
                  <h4>Payment method</h4>
                </div>
                <p>Payment Method</p>
                <div className="content-payment">
                  <div className="radio">
                    <input type="radio" name="payment" defaultChecked />
                    <label>
                      <img
                        src="https://emartmall.com.vn/image/icon_cod.png"
                        alt=""
                      />
                      <span>Cash On Delivery</span>
                    </label>
                  </div>
                  <div className="radio">
                    <input type="radio" name="payment" />
                    <label>
                      <img
                        src="https://emartmall.com.vn/image/icon_bank_transfer.png"
                        alt=""
                      />
                      <span>Bank Transfer</span>
                    </label>
                  </div>
                  <div className="radio">
                    <input type="radio" name="payment" />
                    <label>
                      <img
                        src="https://emartmall.com.vn/image/icon_momo.png"
                        alt=""
                      />
                      <span>MoMo E-Wallet</span>
                    </label>
                  </div>
                  <div className="radio">
                    <input type="radio" name="payment" />
                    <label>
                      <img
                        src="https://emartmall.com.vn/image/icon_vietinbank.png"
                        alt=""
                      />
                      <span>Card Payment</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="out-stock">
                <div className="title">
                  <h4>IF THE PRODUCT IS OUT OF STOCK</h4>
                </div>
                <div className="option">
                  <Form.Item style={{ margin: "8px 0" }} label="Handle">
                    <Select defaultValue="Choose how to handle">
                      <Select.Option value="Choose how to handle">
                        Choose how to handle
                      </Select.Option>
                      <Select.Option value="Remove products from cart and no need to call">
                        Remove products from cart and no need to call
                      </Select.Option>
                      <Select.Option value="Call to notify which product is out of stock">
                        Call to notify which product is out of stock
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="total-amount">
              <h4>toal amount</h4>
            </div>
            <div className="table-total-amount">
              <TotalAmount />
            </div>
            <div className="check-btn-confirm">
              <span>I have read and agree to the</span>
              <a href=" ">
                <b>Operational Regulations</b>
              </a>
              <input type="checkbox" />
            </div>
            <div className="btn-confirm-order">
              <button type="button">Confirm order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
