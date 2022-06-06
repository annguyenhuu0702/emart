import { Link } from "react-router-dom";
import "./index.scss";

const HeaderOnlyLogo = () => {
  return (
    <div className="only-logo">
      <Link to="/">
        <img
          src="https://emartmall.com.vn/image/catalog/icon/logo.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default HeaderOnlyLogo;
