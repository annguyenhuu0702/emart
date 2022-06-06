import Header from "../components/Header/Header";

type Props = {
  children: JSX.Element;
};

const HeaderLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
};

export default HeaderLayout;
