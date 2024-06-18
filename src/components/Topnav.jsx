import logo from "../assets/logo.svg";
import logoText from "../assets/images/logoText.svg";
import { BiMenuAltRight } from "react-icons/bi";

const Topnav = () => {
  return (
    <header className="bg-white pt-[30px] pr-[18px] pl-[20px] pb-[18px]">
      <nav className="flex w-full justify-between">
        <div className="flex">
          <img src={logo} className="" />
          <img src={logoText} className="" />
        </div>
        <BiMenuAltRight className="text-[32px] "/>
      </nav>
    </header>
  );
};

export default Topnav;
