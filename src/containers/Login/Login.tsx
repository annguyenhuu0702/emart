import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./__login.scss";

const Login = () => {
  return (
    <div className="page-login">
      <div className="login">
        <Row>
          <Col lg={12} md={24}>
            <div className="wrap-content-left">
              <div className="content-left">
                <h1 className="title">Login</h1>
                <Form name="login">
                  <Form.Item name="username">
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="User Id / Phone Number"
                    />
                  </Form.Item>
                  <Form.Item name="password">
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Password"
                    />
                  </Form.Item>
                  <a className="login-form-forgot" href=" ">
                    Forgot your password
                  </a>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      LOGIN
                    </Button>
                  </Form.Item>
                </Form>
                <div className="login-social">
                  <p>
                    Please contact Emartmall Hotline when forgetting your
                    Account/Password
                  </p>
                  <p>Hotline: (028) 3622 4567</p>
                  <div className="social-icon">
                    <a href=" ">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href=" ">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href=" ">
                      <i className="fa-brands fa-apple"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={12} md={24}>
            <div className="content-right">
              <h1 className="title">Register</h1>
              <div className="content">
                <Col lg={12} md={12} xs={24} className="membership-card">
                  <h1 className="title">Emart membership card</h1>
                  <Link to="/register" className="icon-register">
                    <img
                      src="https://emartmall.com.vn/image/icon_member.png"
                      alt=""
                    />
                  </Link>
                  <p>
                    If you already have Emart membership card (physical card,
                    barcode 8479) issued at Emart Store, please register with
                    this card number.
                  </p>
                </Col>
                <Col lg={12} md={12} xs={24} className="yet-membership">
                  <h1 className="title">NOT YET MEMBERSHIP</h1>
                  <div className="social-icon">
                    <a href=" ">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href=" ">
                      <i className="fa-solid fa-phone"></i>
                    </a>
                    <a href=" ">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href=" ">
                      <i className="fa-brands fa-apple"></i>
                    </a>
                  </div>
                  <p>
                    New card number will be issued when registering with above
                    methods. This card number will not be changed to a physical
                    card. When you go to Emart Store, you can still accumulate
                    points and use your membership points when opening Emartmall
                    app and giving your card number to Cashier.
                  </p>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
