import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info",
  description: "About Page | Anup Shourya | Full Stack Developer",
};

// TODO : add real data
export default function AboutPage() {
  return (
    <section className="my-14 grid place-items-center max-sm:px-2">
      <main className="max-w-screen-sm">
        <h3 className="text-sm text-text-secondary mb-1">tldr:</h3>
        <h1 className="t-heading">Passion brought me here</h1>
        <p className="t-para">I'm a Product Designer from Taiwan and now based in Poland.</p>
        <p className="t-para">Computers and internet are two words that have shaped me since I was seven.</p>
        <p className="t-para">When I was a little kid, I used to visit my father's office during weekends whenever he had extra work to do. I have wonderful memories of us spending time together while using his computer to explore a magical place called the World Wide Web.</p>
        <p className="t-para">While I'm not focused on any awards or praise, I'm still very proud and motivated by the recognitions I got from the industry. Some of them came from CSS Design Awards, Behance, and Product Hunt.</p>
        <p className="t-para">With a master's degree in Sports Pedagogy, I bring a passion for combining research and user experience to create data-driven and user-centric solutions that meet the needs of both stakeholders and users. My goal is to use my skills to solve real problems and create kickass (I mean literally because I had practiced Taekwondo for 8 years and won a world championship) products that are not only effective to use but also drive business outcomes.</p>
        <p className="t-para">Outside of work, I enjoy trying out new recipes, going on adventures with my german shepherd, and keeping my plants alive.</p>
      </main>
    </section>
  );
}
