import Logo from "@src/components/Logo";
// import NavLink from "@src/components/NavLink";
import BtnPrimary from "@src/components/BtnPrimary";
import ToggleTheme from "@src/components/ToggleTheme";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="  container mx-auto max-md:px-2">
      <div className="flex-r-btw py-5">
        <Logo />
        <div className="flex-r-btw gap-6 max-md:gap-2 max-sm:gap-1">
          <Link
            href="/about"
            className={`text-sm uppercase transition-colors duration-500 hover:text-text-primary font-bold tracking-wider mr-8 max-md:hidden`}
          >
            About
          </Link>
          <Link
            href="/blogs"
            className={`text-sm uppercase transition-colors duration-500 hover:text-text-primary font-bold tracking-wider mr-8 max-md:hidden`}
          >
            blogs
          </Link>
          <BtnPrimary innerText="Book A Call" key="Book A Call" url="https://calendly.com/anup-shourya/30min" />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}
