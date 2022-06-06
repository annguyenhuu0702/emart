import { Button, Form, Input } from "antd";
import "./index.scss";
const VATInvoice = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className="content-right vat-invoice">
      <h1>VAT DETAILS</h1>
      <div className="content">
        <Form
          name="vatinvoice"
          autoComplete="off"
          labelCol={{ lg: 4, md: 6, xs: 24 }}
          wrapperCol={{ lg: 20, md: 18, xs: 24 }}
          onFinish={onFinish}
        >
          <Form.Item label="Company Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item
            label="Company Address"
            name="address"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input.TextArea></Input.TextArea>
          </Form.Item>

          <Form.Item
            label="VAT Code"
            name="vatcode"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email (To receive the electronic invoice)"
            name="email"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
            className="btn-continue"
          >
            <Button htmlType="submit">Continue</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default VATInvoice;
