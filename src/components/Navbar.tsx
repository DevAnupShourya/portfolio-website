import Logo from "@src/components/Logo";
import NavLink from "@src/components/NavLink";
import BtnPrimary from "@src/components/BtnPrimary";
import { NavbarLinks } from "@src/constants";

export default function Navbar() {
  return (
    <nav className="global-section-padding">
      <div className="flex-r-btw py-5">
        <Logo />
        <BtnPrimary innerText="Get in touch" key="Get in touch" />
      </div>
    </nav>
  );
}
