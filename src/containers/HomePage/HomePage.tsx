import Banner from "./Banner/Banner";
import BestSelling from "./BestSelling/BestSelling";
import Category from "./Categories/Category";
import DeliBakery from "./DeliBakery/Delibakery";
import Fruit from "./Fruit/Fruit";
import KoreanProduct from "./KoreanProduct/KoreanProduct";
import OnlyAtEmart from "./OnlyAtEmart/OnlyAtEmart";
import Slider from "./Slider/Slider";
import "./__homepage.scss";
const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <Banner />
      <BestSelling />
      <Category />
      <OnlyAtEmart />
      <KoreanProduct />
      <Fruit />
      <DeliBakery />
    </div>
  );
};

export default HomePage;
