import { Col, Row } from "antd";
import "./__footer.scss";

const Footer = () => {
  const data: any = [
    {
      key: 1,
      list: [
        "Service Center",
        "Transaction Process",
        "Technical Troubleshooting",
        "Warranty Policy",
        "Login",
      ],
    },
    {
      key: 2,
      list: [
        "Operational Regulations",
        "Payment Process",
        "Bad Information Management",
        " Download APP",
      ],
    },
    {
      key: 3,
      list: [
        "About us",
        "Secure Transaction",
        "Shipping - Delivery Policy",
        "History",
      ],
    },
    {
      key: 4,
      list: [
        "General Rules",
        "Customers Protection",
        "Return/Cancel and Refund Policy",
        "Address Book",
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="content">
          <Row>
            {data &&
              data.map((item: any, index: number) => {
                return (
                  <Col lg={6} md={6} xs={12} className="item" key={index}>
                    {item.list.map((data: any, index: number) => {
                      return (
                        <ul key={index}>
                          <li>
                            <a href=" ">{data}</a>
                          </li>
                        </ul>
                      );
                    })}
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="content">
          <div className="logo">
            <a href=" ">
              <img src="https://emartmall.com.vn/image/dathongbao.png" alt="" />
            </a>
          </div>
          <div className="block">
            <div className="siteinfo">
              <p style={{ color: "#fff" }}>Represented by: TRAN BA DUONG</p>
              <p>
                Business Code: <span style={{ color: "#fff" }}>0316940306</span>
              </p>
              <p>
                Certificate of Business Registration No. 0316940306 issued by
                Department of Planning and Investment in Ho Chi Minh City on
                15/07/2021.
              </p>
              <div className="siteinfo-bottom">
                <p>
                  Certificate of Safe Vegetable Food Safety Regulations No.
                  3717/GCNATTP-BQLATTP issued by the Food Safety Management
                  Board of Ho Chi Minh City on December 28, 2021.
                </p>
                <p style={{ color: "#fff" }}>
                  Address: 366 Phan Văn Trị, Phường 5, Quận Gò Vấp, Tp. HCM.
                </p>
                <p>Customer Services: (028) 3622 4567</p>
                <p>Email: emartmall@emart.vn</p>
              </div>
            </div>
          </div>
          <div className="copy-right">
            <div>EMART GO VAP © 2022</div>
            <div className="menu">
              <ul>
                <li>
                  <a href=" ">SITE MAP</a>
                </li>
                <li>
                  <a href=" ">CONTACT US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
