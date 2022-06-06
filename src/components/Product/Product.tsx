import { HeartOutlined } from "@ant-design/icons";
import "./__product.scss";
import { castToVND } from "../../utils";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

interface Props {
  data: any;
  lg?: any;
  md?: any;
  xs?: any;
}
const Product: React.FC<Props> = ({ data, lg, md, xs }: Props) => {
  return (
    <Row className="list-product">
      {data &&
        data.length > 0 &&
        data.map((item: any, index: number) => {
          return (
            <Col lg={lg} md={md} xs={xs} key={index}>
              <div className="item">
                <Link to="/detail" className="img">
                  <img src={item.src} alt={item.src} />
                  {item.sale > 0 && <span className="sale">{item.sale}%</span>}
                </Link>
                <div className="name">
                  <Link to="/detail">{item.name}</Link>
                </div>
                <div className="price-wishlist">
                  <div className="price">
                    {item.priceOld > 0 && (
                      <span className="old">{castToVND(item.priceOld)}</span>
                    )}
                    <span className="new">{castToVND(item.price)}</span>
                  </div>
                  <div className="wishlist">
                    <button>
                      <HeartOutlined />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
    </Row>
  );
};

export default Product;
