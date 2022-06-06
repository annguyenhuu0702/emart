import "./__category.scss";
const Category = () => {
  interface typeData {
    src: string;
    name: string;
  }
  const data: typeData[] = [
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/01-Banh.png",
      name: "Deli & Bakery",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/02-ThucPhamCheBienSan.png",
      name: "Delicatessen",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/03-TraiCay.png",
      name: "Fruit",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/04-Rau.png",
      name: "Vegetables",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/05-CacLoaiHat.png",
      name: "Rice & Nuts",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/06-ThucPhamKho.png",
      name: "Dried Food",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/07-SanPhamHanQuoc.png",
      name: "Korean Products",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/08-NhaCuaDoiSong.png",
      name: "Home",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/09-GiaDung.png",
      name: "Living",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/10-DienTuCongNghe.png",
      name: "It & Technology",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/11-TheThao.png",
      name: "Sports",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/12-ThoiTrang.png",
      name: "Fashion",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/13-DoUong.png",
      name: "Drink",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/14-Sua.png",
      name: "Milk",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/15-BanhKeo.png",
      name: "Snack & Candies",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/16-ThucPhamDinhDuong.png",
      name: "Nutrious Food",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/17-ThucPhamAnLien.png",
      name: "Instant & Canned",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/18-GiaVivaSot.png",
      name: "Sauce & Seasonings",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/19-MevaBe.png",
      name: "Mom & Kid",
    },
    {
      src: "https://emartmall.com.vn/image/catalog/category/category-desktop/20-ChamSocSacDep.png",
      name: "Beauty Care",
    },
  ];
  return (
    <section className="categories-wrap">
      <div className="categories">
        <div className="title">
          <h3>Categories</h3>
        </div>
        <div className="list-category">
          {data.map((item, index) => {
            return (
              <div className="category-item" key={index}>
                <a href=" ">
                  <img src={item.src} alt={item.src} />
                  <span>{item.name}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
