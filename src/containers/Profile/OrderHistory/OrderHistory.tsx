import "./index.scss";
const OrderHistory = () => {
  return (
    <div className="content-right order-history">
      <h1>Order history</h1>
      <div className="content">
        <table className="order-history">
          <tbody>
            <tr>
              <td>
                <label htmlFor="">View Duration</label>
              </td>
              <td>Recent Month</td>
              <td>Month 5</td>
              <td>Month 4</td>
              <td>Custom Setting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
