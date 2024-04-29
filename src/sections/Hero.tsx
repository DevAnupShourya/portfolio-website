import { toolsIKnow } from "@src/constants";

export default function Hero() {
  return (
    <section data-scroll-section id="home" className="global-section-padding min-h-screen grid items-center">
      <main className="overflow-hidden text-center">
        <h1 className="overflow-hidden text-6xl mb-2 max-md:text-3xl text-text-primary tracking-widest leading-tight uppercase font-bold">
          <span className="hero-text block">
            Fresh Ideas
          </span>
        </h1>
        <h1 className="overflow-hidden text-6xl mb-2 max-md:text-3xl text-text-primary tracking-widest leading-tight uppercase font-bold">
          <span className="hero-text block">
            Modern Solutions
          </span>
        </h1>
        <h1 className="overflow-hidden text-6xl mb-2 max-md:text-3xl text-text-primary tracking-widest leading-tight uppercase font-bold">
          <span className="hero-text block">
            Smooth Development
          </span>
        </h1>
        <h3 className="hero-para text-pretty text-white py-4">I love to develop software products.</h3>
        <div className="tools-wrapper relative max-w-screen-sm text-xs font-extralight uppercase overflow-hidden flex flex-row flex-nowrap gap-3 mx-auto text-highlight">
          <div className="tools flex flex-row flex-nowrap gap-3">
            {toolsIKnow.map(t =>
              <span className="tool text-center">
                {t}
              </span>
            )}
          </div>
          <div className="tools flex flex-row flex-nowrap gap-3">
            {toolsIKnow.map(t =>
              <span className="tool text-center">
                {t}
              </span>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}