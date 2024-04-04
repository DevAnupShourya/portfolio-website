import LinkBtn from "@src/components/LinkBtn";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="global-section-padding">
      <p className="text-sm font-light text-text-primary w-1/2 max-md:w-full my-5">
        If you think I’d be a good fit for your next project, please send me an
        email. I’m currently available for freelance/contract work.
      </p>
      <div className="border-y border-divider">
        <div className="flex-r-btw flex-wrap py-2">
          <div className="w-1/2 max-md:w-full px-2 py-5">
            <h1 className="text-sm capitalize">mail us</h1>
            <Link
              href=""
              target="_blank"
              className={`inline-block text-sm px-4 py-2 rounded-full border border-text-primary bg-text-primary text-bg-secondary transition-all duration-500 my-2 hover:bg-bg-secondary hover:text-text-primary hover:border-bg-secondary`}
            >
              contact.yourwebdev@gmail.com
            </Link>
          </div>
          <div className="w-1/2 max-md:w-full px-2 py-5 border-l border-divider max-md:border-l-0 max-md:border-t max-md:border-divider">
            <h1 className="text-sm capitalize">let&apos;s be friend! 👋🏻</h1>
            <div className="flex-r-btw flex-wrap py-2">
              <LinkBtn href="#" isExternal={true} name="Twitter" />
              <LinkBtn href="#" isExternal={true} name="LinkedIn" />
              <LinkBtn href="#" isExternal={true} name="Github" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 flex-r-btw max-md:flex-col max-md:gap-2 border-t border-divider">
        <div>
          <h5 className="text-xs font-light capitalize  max-md:text-center">
            location
          </h5>
          <h5 className="text-sm font-semibold">Ranchi - India</h5>
        </div>
        <div>
          <p className="text-sm font-semibold max-md:text-center">
            &copy; {new Date().getFullYear()} Anup Shourya | All Rights Reserved
          </p>
        </div>
        <div>
          <h5 className="text-xs capitalize font-light ">
            best time to call us
          </h5>
          <h5 className="text-sm font-semibold text-end uppercase max-md:text-center">
            {new Date().toLocaleTimeString()}
          </h5>
        </div>
      </div>
    </footer>
  );
}
