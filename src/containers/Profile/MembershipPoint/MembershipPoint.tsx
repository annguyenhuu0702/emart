import { Button, Col, Row } from "antd";
import "./index.scss";

const MembershipPoint = () => {
  return (
    <div className="content-right membership-point">
      <h1>CUSTOMER CARD NUMBER</h1>
      <div className="content">
        <div className="card-barcode">
          <div className="img">
            <img
              src="https://res.cloudinary.com/diot4imoq/image/upload/v1654222226/emartmall.com.vn_da09jf.png"
              alt=""
            />
          </div>
        </div>
        <h4>Your Reward Points</h4>
        <p>Your Reward Point History: 0 </p>
        <div className="table-point">
          <table className="table-bordered">
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "left",
                  }}
                >
                  Date
                </td>
                <td
                  style={{
                    textAlign: "left",
                  }}
                >
                  Order No
                </td>
                <td
                  style={{
                    textAlign: "right",
                  }}
                >
                  Accumulated Point
                </td>
                <td
                  style={{
                    textAlign: "right",
                  }}
                >
                  Used Points
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3}>
                  You have not used points for any transactions!!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Row>
          <Col lg={24} md={24} xs={24}>
            <div className="pagination">Showing 0 to 0 of 0 (0 Pages)</div>
          </Col>
        </Row>
        <div className="btn-continue">
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPoint;
