import HeaderOnlyLogo from "../components/HeaderOnlyLogo/HeaderOnlyLogo";

type Props = {
  children: JSX.Element;
};

const HeaderOnlyLogoLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <HeaderOnlyLogo />
      <>{children}</>
    </>
  );
};

export default HeaderOnlyLogoLayout;
