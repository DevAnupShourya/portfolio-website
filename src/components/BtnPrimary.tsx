import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = {
  innerText: string;
  url: string;
};

export default function BtnPrimary({
  innerText,
  url,
}: Props & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={url}
      target="_blank"
      className="py-2 px-4 rounded-md bg-accent text-white text-xs transition-all BtnPrimary duration-500 uppercase"
    >
      {innerText}
    </Link>
  );
}
