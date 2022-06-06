import { Button } from "antd";
import "./index.scss";

const AddressBook = () => {
  return (
    <div className="content-right address-book">
      <h1>ADDRESS BOOK ENTRIES</h1>
      <div className="content">
        <div className="wrap-info">
          <div className="name">
            <h3>NGUYEN HUU AN</h3>
            <h3>0384974745</h3>
          </div>
          <div className="address">
            <span>KP6</span>
            <span>Ward: Linh Trung</span>
            <span>District: THỦ ĐỨC</span>
            <span>HỒ CHÍ MINH</span>
          </div>
          <div className="btn-edit">
            <Button>Edit</Button>
          </div>
        </div>
        <div className="btn-new-address">
          <Button>New Address</Button>
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
