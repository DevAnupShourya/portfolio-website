import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = {
  innerText: string;
};

export default function BtnPrimary({
  innerText,
}: Props & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href="#"
      className="py-2 px-4 rounded-md bg-accent text-white text-xs transition-all BtnPrimary duration-500 uppercase"
    >
      {innerText}
    </Link>
  );
}
