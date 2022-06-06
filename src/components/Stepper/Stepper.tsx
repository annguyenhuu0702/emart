import { Steps } from "antd";
import "./__stepper.scss";

const Stepper = () => {
  const { Step } = Steps;

  return (
    <>
      <Steps size="small" current={1} responsive={false}>
        <Step
          className="step-one"
          title="SHOPPING CART"
          icon={
            <img
              style={{ width: "30px" }}
              src="https://emartmall.com.vn/catalog/view/theme/pav_bigmart/image/cart-icon-1.png"
              alt=""
            />
          }
        />
        <Step
          title="SHIPPING INFORMATION"
          className="step-two"
          icon={
            <img
              style={{ width: "30px" }}
              src="https://emartmall.com.vn/catalog/view/theme/pav_bigmart/image/cart-icon-2.png"
              alt=""
            />
          }
        />
        <Step
          className="step-three"
          title="ORDER COMPLETED"
          icon={
            <img
              style={{ width: "30px" }}
              src="https://emartmall.com.vn/catalog/view/theme/pav_bigmart/image/cart-icon-3.png"
              alt=""
            />
          }
        />
      </Steps>
    </>
  );
};

export default Stepper;
