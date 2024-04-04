import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = {
  url: string;
  name: string;
};

export default function NavLink({
  url,
  name,
}: Props & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={url}
      className="hover:text-text-primary active:text-text-primary capitalize text-sm transition-colors font-light"
    >
      {name}
    </Link>
  );
}
