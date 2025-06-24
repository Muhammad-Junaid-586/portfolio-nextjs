import { ProjectSection, projects } from "./ProjectsData.jsx";

const LatestProjects = () => {
  return (
    <section className="w-[90%] mx-auto py-6 md:py-12" id="portfolio">
      {/* Heading */}
      <h2
        className="text-4xl font-black text-center mb-2"
        data-aos="fade-down-right"
      >
        Latest <span className="text-blue-500">Projects</span>
      </h2>

      {/* Underline */}
      <div className="border-t-4 border-blue-500 w-24 mx-auto mb-8"></div>

      {/* Dynamic Project Sections */}
      {Object.keys(projects).map((category) => (
        <ProjectSection
          key={category}
          category={category}
          projects={projects[category]}
        />
      ))}
    </section>
  );
};

export default LatestProjects;
