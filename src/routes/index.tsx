import { Routes, Route } from "react-router-dom";
import Cart from "../containers/Cart/Cart";
import Order from "../containers/Order/Order";
import HomePage from "../containers/HomePage/HomePage";
import ProductCategory from "../containers/ProductCategory/ProductCategory";
import ProductDetail from "../containers/ProductDetail/ProductDetail";
import WishList from "../containers/WishList/WishList";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";
import OrderStatus from "../containers/Profile/OrderStatus/OrderStatus";
import OrderHistory from "../containers/Profile/OrderHistory/OrderHistory";
import MembershipPoint from "../containers/Profile/MembershipPoint/MembershipPoint";
import ChangePassWord from "../containers/Profile/ChangePassWord/ChangePassWord";
import AddressBook from "../containers/Profile/AddressBook/AddressBook";
import VATInvoice from "../containers/Profile/VATInvoice/VATInvoice";
import Contact from "../containers/Profile/Contact/Contact";
import Policy from "../containers/Profile/Policy/Policy";
import FAQ from "../containers/Profile/FAQ/FAQ";
import DefaultLayoutSideBar from "../layout/DefaultLayoutPageAccount/Index";
import HeaderLayout from "../layout/HeaderLayout";
import AccountInfomation from "../containers/Profile/AccountInfomation";
import HeaderOnlyLogoLayout from "../layout/HeaderOnlyLogoLayout";

const publicRoute = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/detail",
    element: ProductDetail,
  },
  {
    path: "/product-category",
    element: ProductCategory,
  },
  {
    path: "/cart",
    element: Cart,
    layout: HeaderOnlyLogoLayout,
  },
  {
    path: "/wishlist",
    element: WishList,
    layout: HeaderOnlyLogoLayout,
  },
  {
    path: "/order",
    element: Order,
    layout: HeaderOnlyLogoLayout,
  },
  {
    path: "/login",
    element: Login,
    layout: HeaderOnlyLogoLayout,
  },
  {
    path: "/register",
    element: Register,
    layout: HeaderOnlyLogoLayout,
  },
  {
    path: "/account/address-book",
    element: AddressBook,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account/change-password",
    element: ChangePassWord,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account/contact-us",
    element: Contact,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account/faqs",
    element: FAQ,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account/infomation",
    element: AccountInfomation,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account/invoice-infomation",
    element: VATInvoice,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account/membership-point",
    element: MembershipPoint,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account/order-history",
    element: OrderHistory,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account/delivery-policy",
    element: Policy,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account/invoice-infomation",
    element: VATInvoice,
    layout: DefaultLayoutSideBar,
  },
  {
    path: "/account",
    element: OrderStatus,
    layout: DefaultLayoutSideBar,
  },
];

const PageRoutes = () => {
  return (
    <Routes>
      {publicRoute.map((item, index) => {
        let Layout = HeaderLayout;
        let Page = item.element;
        if (item.layout) {
          Layout = item.layout;
        }
        return (
          <Route
            key={index}
            path={item.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          ></Route>
        );
      })}
    </Routes>
    // <Routes>
    //   <Route path="/" element={<HomePage />}></Route>
    //   <Route path="/detail" element={<ProductDetail />}></Route>
    //   <Route path="/cart" element={<Cart />}></Route>
    //   <Route path="/order" element={<Order />}></Route>
    //   <Route path="/category" element={<ProductCategory />}></Route>
    //   <Route path="/wishlist" element={<WishList />}></Route>
    //   <Route path="/login" element={<Login />}></Route>
    //   <Route path="/register" element={<Register />}></Route>
    //   <Route
    //     path="/account"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <OrderStatus />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    //   <Route
    //     path="/account/order-history"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <OrderHistory />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    //   <Route
    //     path="/account/infomation"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <InFoMation />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    //   <Route
    //     path="/account/membership-point"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <MembershipPoint />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    //   <Route
    //     path="/account/change-password"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <ChangePassWord />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    //   <Route
    //     path="/account/address-book"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <AddressBook />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    //   <Route
    //     path="/account/invoice-infomation"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <VATInvoice />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    //   <Route
    //     path="/account/contact-us"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <Contact />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    //   <Route
    //     path="/account/delivery-policy"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <Policy />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    //   <Route
    //     path="/account/faqs"
    //     element={
    //       <DefaultLayoutSideBar>
    //         <FAQ />
    //       </DefaultLayoutSideBar>
    //     }
    //   ></Route>
    // </Routes>
  );
};

export default PageRoutes;
