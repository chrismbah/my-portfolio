/* eslint-disable react/prop-types */
import Github from "../../assets/Icons/Github";
import Link from "../../assets/Icons/Link";
export default function ProjectCard({
  name,
  tools,
  details,
  liveLink,
  githubLink,
}) {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <div className="project-tools">
        {tools.map((tool, i) => {
          return (
            <div key={i} className="tool-card">
              {tool}
            </div>
          );
        })}
      </div>
      <div className="project-info">
        <p>{details}</p>
      </div>
      <div className="project-icons">
        {liveLink && <div className="live">
          <p>
            <a href={liveLink}>
              Live <Link />
            </a>
          </p>
        </div>}
        {githubLink && <div className="github">
          <p>
            <a href={githubLink}>
              Code <Github />
            </a>
          </p>
        </div>}
      </div>
    </div>
  );
}
