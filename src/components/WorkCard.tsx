import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";

type Props = {
  image: string;
  logo: string;
  name: string;
  status: string;
  type: string;
  date: string;
  desc: string;
  link: string;
  underDevelopment?: boolean;
};

export default function WorkCard(props: Props) {
  return (
    <Link
      href={props.link}
      target="_blank"
      className="work-card opacity-0 rounded-lg border border-bg-secondary hover:border hover:border-divider transition-all duration-500"
    >
      <main className="w-[40vw] max-lg:w-full bg-bg-secondary hover:bg-bg-primary transition-all duration-500">
        <div className="w-full h-[30vw] max-lg:h-[65vw] max-md:h-[70vw]">
          <div className="relative w-full h-full grid place-items-center">
            {props.underDevelopment && <Tag text="coming soon" />}
            {!props.underDevelopment && <Image
              width={1024}
              height={768}
              src={props.image}
              alt={`${props.name}-project-image`}
              className="absolute top-0 left-0 w-full rounded-t-lg z-10 sepia hover:sepia-0 transition-all duration-500"
            />}
            <div className="absolute top-0 left-0 w-full h-auto flex-r-btw z-20 p-5">
              <Image
                width={1024}
                height={768}
                src={props.logo}
                alt={`${props.name}-logo-image`}
                className="h-8 max-w-fit"
              />
              <h3 className="text-xs lowercase">{props.status}</h3>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex-r-btw ">
            <h1 className="font-semibold text-lg text-text-primary flex items-center max-lg:flex-wrap">
              {props.name}
            </h1>
            <h1 className="font-semibold text-sm text-end">
              {props.type} | {props.date}
            </h1>
          </div>
          <p className="font-semibold text-sm my-2 text-pretty">{props.desc}</p>
        </div>
      </main>
    </Link>
  );
}
