import { Col, Row } from "antd";
import "./__banner.scss";

const Banner = () => {
  const srcs: { src: string; title: string }[] = [
    {
      src: "https://emartmall.com.vn/image/catalog/Banner/1.1.%20POST/2210/OnlyEmartmall/600x320_hangtieudung.png",
      title: "ONLY EMARTMALL",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/Banner/1.1.%20POST/2016/Banner%20No%20Brand%20-%20Emartmall_At_I%20Like%20K-food-01%20600x320.jpg",
      title: "NO BRAND",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/Banner/Banner%203.jpg",
      title: "FRESH FOOD",
    },
  ];

  return (
    <section className="home-banner">
      <div className="banner-child">
        <Row gutter={[16, 16]}>
          {srcs.map((item, index) => {
            return (
              <Col lg={8} md={8} key={index}>
                <div className="img-banner">
                  <a href=" ">
                    <img src={item.src} alt="" />
                  </a>
                  <span className="title">{item.title}</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default Banner;
