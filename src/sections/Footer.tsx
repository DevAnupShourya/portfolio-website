import LinkBtn from "@src/components/LinkBtn";
import { SocialLinks } from "@src/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="global-section-padding">
      <div className="border-y border-divider">
        <div className=" py-2">
          <div className="w-full max-md:w-full py-2 my-[10vh]">
            <p className="text-sm font-light text-text-primary mb-5">
              If you think I’d be a good fit for your next project, please send
              me an email. <br /> I’m currently available for freelance/contract work.
            </p>
            <Link
              href="mailto:contact.yourwebdev@gmail.com"
              target="_blank"
              className={`inline-block text-sm px-4 py-2 rounded-full border border-text-primary bg-text-primary text-bg-secondary transition-all duration-500 my-2 hover:bg-bg-secondary hover:text-text-primary hover:border-bg-secondary`}
            >
              contact.yourwebdev@gmail.com
            </Link>
          </div>
          <div className="w-full max-md:w-full py-2 my-[10vh]" id="contact">
            <h1 className="text-sm  capitalize my-5">let&apos;s be friend! 👋🏻</h1>
            <div className="flex flex-wrap gap-4 justify-between max-md:gap-2 py-2">
              {SocialLinks.map((link) => {
                return (
                  <LinkBtn
                    key={link.name}
                    href={link.url}
                    isExternal={true}
                    name={link.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-r-btw max-md:flex-col max-md:gap-2 border-t border-divider py-10">
        <div>
          <h5 className="text-xs font-light capitalize max-md:text-center">
            location
          </h5>
          <h5 className="text-sm font-semibold">Ranchi - India</h5>
        </div>
        <div>
          <p className="text-sm font-semibold max-md:text-center">
            &copy; {new Date().getFullYear()} Anup Shourya | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
