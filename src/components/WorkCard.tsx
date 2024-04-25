import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";

type Props = {
  image: string;
  logo: string;
  name: string;
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
      className="work-card opacity-0 rounded-lg border border-bg-secondary hover:border hover:border-divider transition-all duration-500"
    >
      <main className="w-[40vw] max-lg:w-full bg-bg-secondary hover:bg-bg-primary transition-all duration-500">
        <div className="w-full h-[30vw] max-lg:h-[65vw] max-md:h-[70vw]">
          <div className="relative w-full h-full">
            <Image
              width={1024}
              height={768}
              src={props.image}
              alt="pro"
              className="absolute top-0 left-0 w-full rounded-t-lg z-10 sepia hover:sepia-0 transition-all duration-500"
            />
            <div className="absolute top-0 left-0 w-full h-auto flex-r-btw z-20 p-5">
              <h1 className="text-xs">{props.logo}</h1>
              <h3 className="text-xs opacity-0 hover:opacity-100 transition-opacity duration-500">
                Live{" "}
                <svg
                  className={`inline group-hover:translate-x-3 transition-all duration-500`}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="14px"
                  width="14px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Location_Arrow_1">
                    <path d="M14.472,20.937a1.438,1.438,0,0,1-1.3-.812L10.3,14.343a1.418,1.418,0,0,0-.642-.641L3.874,10.831A1.462,1.462,0,0,1,4.06,8.136l14.952-5a1.46,1.46,0,0,1,1.849,1.847l-5,14.952a1.439,1.439,0,0,1-1.284.994C14.543,20.936,14.507,20.937,14.472,20.937ZM19.479,4.063a.488.488,0,0,0-.149.024h0l-14.952,5a.46.46,0,0,0-.058.849L10.1,12.805A2.444,2.444,0,0,1,11.2,13.9l2.87,5.782a.443.443,0,0,0,.445.255.45.45,0,0,0,.4-.312l5-14.953a.462.462,0,0,0-.433-.607Z"></path>
                  </g>
                </svg>
              </h3>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex-r-btw ">
            <h1 className="font-semibold text-lg text-text-primary flex items-center max-lg:flex-wrap">
              {props.name}
              {props.underDevelopment && <Tag text="coming soon" />}
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
