import { Col, Row } from "antd";
import HeaderOnlyLogo from "../../components/HeaderOnlyLogo/HeaderOnlyLogo";
import SideBar from "../../containers/Profile/SideBar/SideBar";
import "./index.scss";
type Props = {
  children: JSX.Element;
};

const DefaultLayoutSideBar: React.FC<Props> = ({ children }) => {
  return (
    <div className="page-account">
      <HeaderOnlyLogo />
      <div className="account">
        <Row
          style={{
            width: "100%",
          }}
        >
          <Col lg={5} md={6} xs={24}>
            <SideBar />
          </Col>
          <Col lg={19} md={18} xs={24}>
            {children}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DefaultLayoutSideBar;
