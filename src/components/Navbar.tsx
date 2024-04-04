import Logo from "@src/components/Logo";
import NavLink from "@src/components/NavLink";
import BtnPrimary from "@src/components/BtnPrimary";
import { NavbarLinks } from "@src/constants";

export default function Navbar() {
  return (
    <nav className="global-section-padding">
      <div className="flex-r-btw py-5">
        <Logo />
        <div className="flex-r-btw gap-10 max-md:hidden">
          {NavbarLinks.map((link) => {
            return <NavLink key={link.name} name={link.name} url={link.url} />;
          })}
        </div>
        <BtnPrimary innerText="Get in touch" key="Get in touch" />
      </div>
      <div className="flex-r-btw justify-self-end gap-10 md:hidden py-5 border-y border-divider">
        {NavbarLinks.map((link) => {
          return <NavLink key={link.name} name={link.name} url={link.url} />;
        })}
      </div>
    </nav>
  );
}
