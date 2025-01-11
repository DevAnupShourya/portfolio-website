import { SocialLinks } from "@src/constants";
import { AtSignIcon, FileUserIcon, HeadsetIcon } from "@src/constants/logos";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto max-sm:px-2">
      <div className="w-full border-y border-divider flex flex-row justify-between flex-wrap max-md:flex-col-reverse max-md:gap-10 items-stretch py-10">
        <div className="w-1/3 max-md:w-full bg-bg-secondary rounded-md px-6 flex flex-col justify-between flex-nowrap">
          <div>
            <h1 className="text-lg text-text-primary capitalize mt-4 mb-8">let&apos;s be friend! 👋🏻</h1>
            {/* TODO : implement copy action */}
            <Link
              href="mailto:contact.yourwebdev@gmail.com"
              target="_blank"
              className={`text-sm capitalize transition-colors duration-500 hover:text-text-primary font-light flex flex-row flex-nowrap gap-1 justify-center items-center max-w-fit max-md:underline underline-offset-4`}
            >
              <AtSignIcon className="size-4" /> Copy my email
            </Link>
            <Link
              // TODO : have pdf link
              href="/resume.pdf"
              className={`text-sm my-4 capitalize transition-colors duration-500 hover:text-text-primary font-light flex flex-row flex-nowrap gap-1 justify-center items-center max-w-fit max-md:underline underline-offset-4`}
            >
              <FileUserIcon className="size-4" /> Get my resume
            </Link>
            <Link
              // TODO : cal.com link
              href="ynha par"
              className={`text-sm capitalize transition-colors duration-500 hover:text-text-primary font-light flex flex-row flex-nowrap gap-1 justify-center items-center max-w-fit max-md:underline underline-offset-4`}
            >
              <HeadsetIcon className="size-4" /> Book a call
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 justify-between max-md:gap-2 pt-10 pb-2">
            {SocialLinks.map((link) => {
              return (
                <Link
                  href={link.url}
                  key={link.name}
                  title={`${link.name} url`}
                  target="_blank"
                  className={`inline-block text-sm p-4 rounded-full transition-all duration-500 capitalize hover:bg-bg-primary  dark:hover:bg-bg-secondary hover:text-accent`}
                >
                  <link.icon className="size-4" />
                </Link>
              );
            })}
          </div>

        </div>
        {/* TODO : SEND this form somewhere */}
        <form action="" className="w-2/3 max-md:w-full p-2 max-w-screen-md space-y-6">
          <div>
            <h1 className="text-text-primary text-2xl font-bold">How do we get in touch?</h1>
            <p className="text-text-secondary text-sm font-light">Leave your details here and I'll reach out to you.</p>
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-text-primary">Full Name</label>
            <input type="text" id="name" className="w-full bg-bg-secondary text-text-primary text-sm rounded-sm focus:ring-highlight p-2.5 outline-none" placeholder="Sam Altman" />
          </div>

          <div>
            <label htmlFor="mail" className="block mb-2 text-sm font-medium text-text-primary">Email</label>
            <input type="email" id="mail" className="w-full bg-bg-secondary text-text-primary text-sm rounded-sm focus:ring-highlight p-2.5 outline-none" placeholder="you@company.com" />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-text-primary">Subject</label>
            <input type="text" id="subject" className="w-full bg-bg-secondary text-text-primary text-sm rounded-sm focus:ring-highlight p-2.5 outline-none" placeholder="Reason of talking to me" />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-text-primary">Message</label>
            <textarea rows={6} id="message" className="w-full bg-bg-secondary text-text-primary text-sm rounded-sm focus:ring-highlight p-2.5 outline-none" placeholder="Leave your message here..." />
          </div>

          <button type="submit" className="py-2 px-4 rounded-md bg-highlight text-white text-sm uppercase w-full hover:bg-[#3567c490] transition-all duration-500 group">
            Send &nbsp;
            <svg
              className={`size-4 inline group-hover:translate-x-1 transition-all duration-500`}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
            >
              <g id="Location_Arrow_1">
                <path d="M14.472,20.937a1.438,1.438,0,0,1-1.3-.812L10.3,14.343a1.418,1.418,0,0,0-.642-.641L3.874,10.831A1.462,1.462,0,0,1,4.06,8.136l14.952-5a1.46,1.46,0,0,1,1.849,1.847l-5,14.952a1.439,1.439,0,0,1-1.284.994C14.543,20.936,14.507,20.937,14.472,20.937ZM19.479,4.063a.488.488,0,0,0-.149.024h0l-14.952,5a.46.46,0,0,0-.058.849L10.1,12.805A2.444,2.444,0,0,1,11.2,13.9l2.87,5.782a.443.443,0,0,0,.445.255.45.45,0,0,0,.4-.312l5-14.953a.462.462,0,0,0-.433-.607Z"></path>
              </g>
            </svg>
          </button>
        </form>
      </div>
      <div className="flex-r-btw max-md:flex-col max-md:gap-2 py-10 mt-2">
        <div className="md:hidden space-x-5">
          <h5 className="text-xs font-light capitalize text-center">
            Other Pages
          </h5>
          <Link
            href="/about"
            className={`text-sm uppercase transition-colors duration-500 hover:text-text-primary font-bold tracking-wider underline underline-offset-4`}
          >
            About
          </Link>
          <Link
            href="/blogs"
            className={`text-sm uppercase transition-colors duration-500 hover:text-text-primary font-bold tracking-wider underline underline-offset-4`}
          >
            blogs
          </Link>
        </div>
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
