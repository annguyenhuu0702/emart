import { Form, Input, Button, Col, Row } from "antd";
import "./__register.scss";

const Register = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="page-register">
      <div className="register">
        <h1 className="heading-register">Register account</h1>
        <Row className="form-register">
          <Col lg={12}>
            <Form name="register" autoComplete="off" onFinish={onFinish}>
              <Form.Item>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please enter the input" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Button>Check username</Button>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Retype Password"
                name="retypepassword"
                rules={[{ required: true, message: "Please enter the input" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Form.Item
                  label="Membership Card"
                  name="membershipcart"
                  rules={[
                    { required: true, message: "Please enter the input" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Button>Check Membership Card</Button>
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter the input" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mobile"
                name="mobile"
                rules={[{ required: true, message: "Please enter the input" }]}
              >
                <Input />
              </Form.Item>
            </Form>
            <div className="btn-wrap">
              <Button>Back</Button>
              <Button>Continue</Button>
            </div>
            <p>
              If the phone number, membership card number, email address has
              been registered, please call Hotline (028) 3622 4567 or email
              emartmall@emart.vn for support. If the phone number has changed or
              incorrect, please go to the Customer Service counter at Emart
              Store to changing information.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
