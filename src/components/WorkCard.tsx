import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import { Project } from "@src/constants";
import { ExternalLinkIcon } from "@src/constants/logos";

export default function WorkCard(props: Project) {
  return (
    <Link
      href={`/projects/${encodeURI(props.name.toLocaleLowerCase())}`}
      className="work-card opacity-0 "
    >
      <main className="max-sm:h-[35vh] max-md:h-[40vh] max-lg:h-[60vh] max-lg:w-full max-lg:my-10 size-full bg-bg-secondary hover:bg-bg-primary transition-all duration-500 flex flex-col justify-between flex-nowrap rounded-lg border border-bg-secondary hover:border hover:border-divider">
        <div className="relative size-full grid place-items-center overflow-hidden">
          {props.underDevelopment &&
            <Tag text="coming soon" />
          }
          {!props.underDevelopment &&
            <Image
              width={1400}
              height={1000}
              src={props.image}
              alt={`${props.name}-project-image`}
              className="w-full xl:size-full aspect-video absolute z-10 sepia hover:sepia-0 transition-all duration-500"
            />
          }
          <div className="absolute top-0 left-0 w-full h-auto flex-r-btw z-20 p-5">
            {!props.underDevelopment &&
              <Image
                width={1024}
                height={768}
                src={props.logoUrl}
                alt={`${props.name}-logo-image`}
                className="h-12 max-lg:h-6 max-w-fit"
              />
            }
            <h3 className="text-xs uppercase">
              {props.status === 'live' &&
                <span>
                  <div className="size-2 bg-highlight rounded-full animate-pulse inline-block duration-100" /> live
                </span>
              }
              {props.status === 'development' &&
                <span>
                  <div className="size-2 bg-accent rounded-full animate-pulse inline-block duration-700" /> developing
                </span>
              }
              {props.status === 'yet-to-start' &&
                <span>
                  <div className="size-2 bg-white rounded-full animate-pulse inline-block duration-1000" /> staring soon
                </span>
              }
            </h3>
          </div>
        </div>
        <div className="px-4 max-md:px-2 py-2 w-full z-30">
          <div className="flex-r-btw">
            {props.status === 'live' ? (
              <Link href={props.link} className="font-semibold text-lg max-md:text-base text-text-primary flex flex-row flex-nowrap gap-1 items-center hover:scale-105 transition-transform duration-500">
                {props.name} <ExternalLinkIcon className="size-4 inline" />
              </Link>
            ) : (
              <h1 className="font-semibold text-lg max-md:text-base text-text-primary">
                {props.name}
              </h1>
            )}
            <h1 className="font-semibold text-sm max-md:text-xs text-end">
              {props.type} | {props.date}
            </h1>
          </div>
          <p className="font-semibold text-sm  max-md:text-xs my-2 text-pretty">{props.desc}</p>
        </div>
      </main>
    </Link>
  );
}
