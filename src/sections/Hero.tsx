
import { toolsIKnow } from "@src/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section data-scroll-section id="home" className="  min-h-screen grid items-center">
      <main className="overflow-hidden max-w-screen-lg text-center mx-auto">
        <h1 className="overflow-hidden text-6xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl mb-2 text-text-primary tracking-widest leading-tight uppercase font-bold">
          <span className="hero-text block">
            Solving Real Problems
          </span>
        </h1>
        <h1 className="overflow-hidden text-6xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl mb-2 text-text-primary tracking-widest leading-tight uppercase font-bold">
          <span className="hero-text block">
            By Delivering
          </span>
        </h1>
        <h1 className="overflow-hidden text-6xl max-lg:text-4xl max-md:text-2xl max-sm:text-xl mb-2 text-text-primary tracking-widest leading-tight uppercase font-bold">
          <span className="hero-text block">
            Useful SASS Products
          </span>
        </h1>
        <p className="hero-para text-pretty text-text-secondary py-4 max-w-screen-sm mx-auto capitalize">Hi, I'm Anup Shourya, a Full Stack Developer specializes in building Modern Full Stack React/Nextjs Web Apps that users love.</p>

        <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden my-10 py-4">
          <div className="tools-wrapper relative w-full text-xs font-extralight uppercase overflow-hidden flex flex-row flex-nowrap gap-3 mx-auto text-highlight">
            <div className="tools flex flex-row flex-nowrap gap-10">
              {toolsIKnow.map(t =>
                <figure key={t} title={`${t}`} className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-bg-primary [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] grid place-items-center">
                  <Image src={`/assets/logos/${t.toLocaleLowerCase()}.png`} alt={`${t} Logo`} width={48} height={48} />
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-70 blur-[20px] filter" />
                </figure>
              )}
              <figure className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-bg-primary [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-full"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line></svg>
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-70 blur-[20px] filter" />
              </figure>
              <figure className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-bg-primary [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] grid place-items-center">
                <svg className="size-full" fill="currentColor" viewBox="0 0 43 43"><path d="M32 43H11a10.928 10.928 0 01-7.778-3.222A10.928 10.928 0 010 32V11a10.928 10.928 0 013.222-7.778A10.928 10.928 0 0111 0h21a10.929 10.929 0 017.779 3.222A10.927 10.927 0 0143 11v21a10.927 10.927 0 01-3.222 7.778A10.929 10.929 0 0132 43zM11.314 12.293v12.033a6.35 6.35 0 00.87 3.31 6.243 6.243 0 002.422 2.3 7.458 7.458 0 003.595.843 7.474 7.474 0 003.6-.839 6.2 6.2 0 002.418-2.3 6.381 6.381 0 00.869-3.315V12.292h-1.659V24.21a5.149 5.149 0 01-.643 2.578 4.6 4.6 0 01-1.824 1.779 5.668 5.668 0 01-2.759.648 5.646 5.646 0 01-2.756-.648 4.64 4.64 0 01-1.823-1.779 5.116 5.116 0 01-.648-2.578V12.292zm18.6 0v18.175h1.66V12.293z"></path></svg>
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-70 blur-[20px] filter" />
              </figure>
            </div>
            <div className="tools flex flex-row flex-nowrap gap-10">
              {toolsIKnow.map(t =>
                <figure key={t} title={`${t}`} className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-bg-primary [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] grid place-items-center">
                  <Image src={`/assets/logos/${t.toLocaleLowerCase()}.png`} alt={`${t} Logo`} width={48} height={48} />
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-70 blur-[20px] filter" />
                </figure>
              )}
              <figure className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-bg-primary [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="size-full"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line></svg>
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-70 blur-[20px] filter" />
              </figure>
              <figure className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-bg-primary [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] grid place-items-center">
                <svg className="size-full" fill="currentColor" viewBox="0 0 43 43"><path d="M32 43H11a10.928 10.928 0 01-7.778-3.222A10.928 10.928 0 010 32V11a10.928 10.928 0 013.222-7.778A10.928 10.928 0 0111 0h21a10.929 10.929 0 017.779 3.222A10.927 10.927 0 0143 11v21a10.927 10.927 0 01-3.222 7.778A10.929 10.929 0 0132 43zM11.314 12.293v12.033a6.35 6.35 0 00.87 3.31 6.243 6.243 0 002.422 2.3 7.458 7.458 0 003.595.843 7.474 7.474 0 003.6-.839 6.2 6.2 0 002.418-2.3 6.381 6.381 0 00.869-3.315V12.292h-1.659V24.21a5.149 5.149 0 01-.643 2.578 4.6 4.6 0 01-1.824 1.779 5.668 5.668 0 01-2.759.648 5.646 5.646 0 01-2.756-.648 4.64 4.64 0 01-1.823-1.779 5.116 5.116 0 01-.648-2.578V12.292zm18.6 0v18.175h1.66V12.293z"></path></svg>
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 opacity-70 blur-[20px] filter" />
              </figure>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-bg-primary"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-bg-primary"></div>
        </div>
      </main>

    </section>
  );
}