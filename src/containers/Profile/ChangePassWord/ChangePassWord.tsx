import { Button, Form, Input } from "antd";
import "./index.scss";

const ChangePassWord = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <div className="content-right change-password">
      <h1>CHANGE PASSWORD</h1>
      <div className="content">
        <Form
          name="changepassword"
          autoComplete="off"
          labelCol={{ lg: 4, md: 6, xs: 24 }}
          wrapperCol={{ lg: 20, md: 18, xs: 24 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="oldpassword"
            label="Old Password"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input type="password" placeholder="Old Password" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input type="password" placeholder="PassWord" />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            label="Password Confirm"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input type="password" placeholder="Password Confirm" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="btn-btn">
            <Button htmlType="submit">Continue</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassWord;
