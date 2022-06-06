import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import Footer from "./components/Footer/Footer";
import PageRoutes from "./routes";
import BackToTop from "./components/BackToTop/BackToTop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App" style={{ overflowX: "hidden" }}>
        <BackToTop />
        {PageRoutes()}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
