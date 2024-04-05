import WorkCard from "@src/components/WorkCard";

function Work() {
  return (
    <section className="global-section-padding flex-r-btw my-10 overflow-x-scroll gap-20 max-lg:flex-col max-lg:gap-10">
      <WorkCard
        image="https://framerusercontent.com/images/8pZP1I83Lon69ZpDxNInyq1E6E.png?scale-down-to=1024"
        logo="Band Logo"
        name="Band"
        type="Full-Stack"
        date="2023"
        desc="Reimagining direct buying group tools with intuitive interfaces, and streamlined workflows."
        link="/"
        underDevelopment
      />
      <WorkCard
        image="https://framerusercontent.com/images/sqTb7Ydo0NkQwUAMdGBbfmJwGQ.png?scale-down-to=1024"
        logo="Knock Logo"
        name="Knock"
        type="Front-End"
        date="2022"
        desc="Expanding a redesign with richer details, an all new integrations library and subsequent landing pages."
        link="/"
      />
      <WorkCard
        image="https://framerusercontent.com/images/xsQbWUuFrcH6hK5kYnJfJ8Gc6hE.png?scale-down-to=1024"
        logo="Jerry Logo"
        name="Jerry"
        type="Backend"
        date="2023"
        desc="Designing a conceptual customer flow in 4 days for a partnership with an industry leading marketplace partner."
        link="/"
      />
      <WorkCard
        image="https://framerusercontent.com/images/MAbNX7etWcVkYLh1EAE4vbsLs0k.png?scale-down-to=1024"
        logo="Able Logo"
        name="Able"
        type="Web App"
        date="2021"
        desc="Automating savings, tax calculations, and record keeping for creators."
        link="/"
      />
      <WorkCard
        image="https://framerusercontent.com/images/bbnG6FerpIHgzLRjEMy4rMTgdk.png?scale-down-to=1024"
        logo="Raster Logo"
        name="Raster"
        type="Web App"
        date="2019"
        desc="A next generation digital asset manager for modern teams to organize, edit, and host photography. "
        link="/"
      />
    </section>
  );
}

export default Work;
