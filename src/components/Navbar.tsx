import Logo from "@src/components/Logo";
// import NavLink from "@src/components/NavLink";
import BtnPrimary from "@src/components/BtnPrimary";

export default function Navbar() {
  return (
    <nav className="global-section-padding">
      <div className="flex-r-btw py-5">
        <Logo />
        <BtnPrimary innerText="Set A Meeting" key="Set A Meeting" url="https://calendly.com/anup-shourya/30min"/>
      </div>
    </nav>
  );
}
