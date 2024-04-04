import Link from "next/link";
import { HTMLAttributes } from "react";

<svg
  stroke="currentColor"
  fill="currentColor"
  stroke-width="0"
  viewBox="0 0 512 512"
  height="200px"
  width="200px"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
</svg>;
type Props = {
  href: string;
  name: string;
  isExternal: boolean;
};

export default function LinkBtn({
  href,
  name,
  isExternal = false,
}: Props & HTMLAttributes<HTMLLinkElement>) {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      className={`inline-block text-sm px-4 py-2 rounded-full border border-divider hover:border-bg-secondary hover:bg-bg-secondary hover:text-text-primary transition-all duration-500 group`}
    >
      {name}{" "}
      <svg
        className={`inline group-hover:translate-x-3 transition-all duration-500 ${
          isExternal ? "" : "rotate-45"
        }`}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="16px"
        width="16px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Location_Arrow_1">
          <path d="M14.472,20.937a1.438,1.438,0,0,1-1.3-.812L10.3,14.343a1.418,1.418,0,0,0-.642-.641L3.874,10.831A1.462,1.462,0,0,1,4.06,8.136l14.952-5a1.46,1.46,0,0,1,1.849,1.847l-5,14.952a1.439,1.439,0,0,1-1.284.994C14.543,20.936,14.507,20.937,14.472,20.937ZM19.479,4.063a.488.488,0,0,0-.149.024h0l-14.952,5a.46.46,0,0,0-.058.849L10.1,12.805A2.444,2.444,0,0,1,11.2,13.9l2.87,5.782a.443.443,0,0,0,.445.255.45.45,0,0,0,.4-.312l5-14.953a.462.462,0,0,0-.433-.607Z"></path>
        </g>
      </svg>
    </Link>
  );
}
