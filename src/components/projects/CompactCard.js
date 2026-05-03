import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function CompactCard({ project }) {
  const topThree = project.techStack.slice(0, 3);
  const href = project.url || project.github;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name}${!project.url ? ' on GitHub' : ''}`}
      className="group flex flex-row items-center gap-4 py-4 px-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-poppins font-bold text-gray-300 text-[24px] select-none">
            {project.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Middle content */}
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        <p
          className="font-poppins font-bold text-[14px] md:text-[15px] text-black truncate group-hover:text-gray-700 transition-colors"
          style={{ letterSpacing: '-0.3px' }}
        >
          {project.name}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {topThree.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 border border-gray-200 rounded text-[11px] font-poppins text-gray-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right — category + arrow */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="hidden sm:block px-2.5 py-1 bg-gray-100 rounded text-[11px] font-poppins font-medium text-gray-600">
          {project.category}
        </span>
        {project.url ? (
          <OpenInNewIcon
            className="text-gray-300 group-hover:text-black transition-colors duration-150"
            style={{ fontSize: '16px' }}
          />
        ) : (
          <GitHubIcon
            className="text-gray-300 group-hover:text-black transition-colors duration-150"
            style={{ fontSize: '16px' }}
          />
        )}
      </div>
    </a>
  );
}
