import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./__sidebar.scss";

interface typeData {
  title?: string;
  src?: string;
  name?: string;
  item?: any;
}

const data: typeData[] = [
  {
    title: "My Order",
    item: [
      {
        name: "Order Status",
        src: "/account",
      },
      {
        name: "Order History",
        src: "/account/order-history",
      },
    ],
  },
  {
    title: "Account Infomation",
    item: [
      {
        name: "Account Information",
        src: "/account/infomation",
      },
      {
        name: "Membership Point",
        src: "/account/membership-point",
      },
      {
        name: "Change Password",
        src: "/account/change-password",
      },
      {
        name: "Address Book",
        src: "/account/address-book",
      },
      {
        name: "VAT Invoice Infomation",
        src: "/account/invoice-infomation",
      },
    ],
  },
  {
    title: "Promotion Information",
    item: [],
  },
  {
    title: "Service Center",
    item: [
      {
        name: "Contact Us Directly",
        src: "/account/contact-us",
      },
      {
        name: "Delivery Policy",
        src: "/account/delivery-policy",
      },
      {
        name: "FAQs",
        src: "/account/faqs",
      },
    ],
  },
  {
    title: "Logout",
    item: [],
  },
];
const SideBar = () => {
  const location = useLocation();
  const [activeSideBar, setActiveSideBar] = useState<any>();

  useEffect(() => {
    let result = {};
    data.forEach((element) => {
      let index = element.item?.findIndex(
        (item: any) => item.src === location.pathname
      );
      if (index !== -1) {
        result = element.item[index];
      }
    });
    setActiveSideBar(result);
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <h5>
        Hello, <b>Nguyễn Hữu An</b>
      </h5>
      <ul className="list-menu">
        {data &&
          data.map((item: any, index: number) => {
            return (
              <li className="item" key={index}>
                <span className={item.item.length === 0 ? "title" : ""}>
                  {item.title}
                </span>
                <ul>
                  {item.item &&
                    item.item.length > 0 &&
                    item.item.map((element: any, index: number) => {
                      return (
                        <li key={index}>
                          <Link
                            to={element.src}
                            className={
                              element.name === activeSideBar?.name
                                ? "active"
                                : ""
                            }
                          >
                            {element.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SideBar;
