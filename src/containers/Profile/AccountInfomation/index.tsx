import { Button, Form, Input, Radio, Select } from "antd";
import { useState } from "react";
import "./index.scss";
const AccountInfomation: React.FC = () => {
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
    console.log("Success:", user);
  };

  return (
    <div className="content-right infomation">
      <h1>My infomation</h1>
      <div className="content">
        <p>Your Personal Details</p>
        <div className="form-info">
          <Form
            onFinish={onFinish}
            name="info"
            initialValues={user}
            autoComplete="off"
            labelCol={{ lg: 2, md: 4 }}
            wrapperCol={{ lg: 22, md: 20 }}
          >
            <Form.Item
              name="fullname"
              label="FullName"
              rules={[{ required: true, message: "" }]}
            >
              <Input value={user.fullname} disabled />
            </Form.Item>
            <Form.Item
              name="birthday"
              label="Birthday"
              rules={[{ required: true, message: "" }]}
            >
              <Input value={user.birthday} disabled />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "" }]}
            >
              <Radio.Group name="gender">
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="email"
              label="E-Mail"
              rules={[{ required: true, message: "" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phonenumber"
              label="Mobile"
              rules={[{ required: true }]}
            >
              <Input value={user.phonenumber} disabled />
            </Form.Item>
            <Form.Item name="city" label="City" rules={[{ required: true }]}>
              <Select
                disabled
                value={user.city}
                onChange={(value) => {
                  setUser({ ...user, city: value });
                }}
              >
                <Select.Option value="Hồ Chí Minh">Hồ Chí Minh</Select.Option>
                <Select.Option value="Hà Nội">Hà Nội</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="district"
              label="District"
              rules={[{ required: true, message: "" }]}
            >
              <Select value={user.district} onChange={() => {}} disabled>
                <Select.Option value="Thủ Đức">Thủ Đức</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="ward"
              label="Ward"
              rules={[{ required: true, message: "" }]}
            >
              <Select value={user.ward} disabled>
                <Select.Option value="Linh Trung">Linh Trung</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: "" }]}
            >
              <Input value={user.address} disabled />
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
    </div>
  );
};

export default AccountInfomation;
