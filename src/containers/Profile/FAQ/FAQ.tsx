import "./index.scss";

const FAQ = () => {
  return (
    <div className="content-right">
      <h1>FAQ</h1>
      <div className="content">
        <h2>MEMBERSHIP REGISTRATION</h2>
        <button className="accordion">
          1/ How Do I Register A Membership On Emartmall?
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
        <button className="accordion">
          2/ Emart Membership Card Benefits
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
        <button className="accordion">
          3/ How To Change Or Add An Address ?
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
        <button className="accordion">
          4/ Change Other Information
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
        <h2>ORDER AND PAYMENT</h2>
        <button className="accordion">
          1/ How To Order On Emartmall ?<i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
        <button className="accordion">
          2/ How To Use Accumulated Points When Checkout The Order
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
        <button className="accordion">
          3/ Payment Method
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
        <button className="accordion">
          4/ Processing Method When Out Of Stock
          <i className="fa-solid fa-plus"></i>
        </button>

        <div className="panel"></div>
        <button className="accordion">
          5/ Issuing VAT Invoice
          <i className="fa-solid fa-plus"></i>
        </button>
        <h2>DELIVERY</h2>
        <button className="accordion">
          1/ Check The Delivery And Order History
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
        <button className="accordion">
          2/ Delivery Time
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
        <button className="accordion">
          3/ Delivery Fee
          <i className="fa-solid fa-plus"></i>
        </button>
        <div className="panel"></div>
      </div>
    </div>
  );
};

export default FAQ;
