import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const MAX_BADGES = 5;

export default function GridCard({ project }) {
  const visibleTech = project.techStack.slice(0, MAX_BADGES);
  const extraCount = project.techStack.length - MAX_BADGES;

  return (
    <div className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-black hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full aspect-video object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full aspect-video bg-gray-100 flex items-center justify-center">
            <span className="font-poppins font-bold text-gray-300 text-[48px] select-none">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3
          className="font-poppins font-bold text-[17px] md:text-[18px] text-black leading-snug"
          style={{ letterSpacing: '-0.4px' }}
        >
          {project.name}
        </h3>

        <p className="font-poppins font-normal text-[13px] text-gray-600 leading-[1.65] line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 border border-gray-200 rounded text-[11px] font-poppins font-medium text-gray-500"
            >
              {tech}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="px-2 py-0.5 border border-gray-200 rounded text-[11px] font-poppins font-medium text-gray-400">
              +{extraCount} more
            </span>
          )}
        </div>

        {/* CTAs */}
        <div className="flex gap-2 pt-3 border-t border-gray-100">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-black text-white py-2.5 rounded font-poppins font-semibold text-[12px] hover:bg-gray-800 transition-colors min-h-[44px]"
            >
              <OpenInNewIcon style={{ fontSize: '14px' }} />
              View Project
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${project.name}`}
            className={`flex items-center justify-center gap-1.5 px-3 border border-gray-200 rounded text-gray-600 hover:border-black hover:text-black transition-colors min-h-[44px] font-poppins font-semibold text-[12px] ${!project.url ? 'flex-1' : 'min-w-[44px]'}`}
          >
            <GitHubIcon style={{ fontSize: '18px' }} />
            {!project.url && 'View Code'}
          </a>
        </div>
      </div>
    </div>
  );
}
