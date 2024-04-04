export default function Hero() {
  return (
    <section className="global-section-padding h-screen grid items-center">
      <main>
        <h1 className="text-6xl max-md:text-4xl text-text-primary tracking-widest leading-tight">
          Full-Stack <br /> Web Engineer
        </h1>
        <div className="py-5">
          <div className="flex-r-btw w-1/3  max-lg:w-full py-4">
            <button className="text-xs hover:text-white transition-colors font-semibold duration-200 text-white">For anyone</button>
            <button className="text-xs hover:text-white transition-colors font-semibold duration-200 ">Front-End</button>
            <button className="text-xs hover:text-white transition-colors font-semibold duration-200 ">Backend-End</button>
            <button className="text-xs hover:text-white transition-colors font-semibold duration-200 ">Full-Stack</button>
          </div>
          <div className="w-2/4 max-lg:w-full">
            <p className="text-pretty text-white">I pair my background of technical and visual skills plus experience working with no-code tools to deliver websites that perform and convert.</p>
          </div>
        </div>
      </main>
    </section>
  );
}
