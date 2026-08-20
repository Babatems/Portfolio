import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ListCard({ project }) {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-black transition-all duration-300">
      {/* Image — top on mobile, right on desktop */}
      <div className="sm:order-2 sm:w-[40%] flex-shrink-0 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-[220px] sm:h-full object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-[220px] sm:h-full bg-gray-100 flex items-center justify-center">
            <span className="font-poppins font-bold text-gray-300 text-[64px] select-none">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content — bottom on mobile, left on desktop */}
      <div className="sm:order-1 sm:w-[60%] flex flex-col gap-4 p-6">
        {/* Metadata */}
        <div className="flex items-center gap-2">
          <span className="font-poppins text-[12px] text-gray-400">{project.year}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
          <span className="px-2 py-0.5 bg-gray-100 rounded text-[11px] font-poppins font-medium text-gray-600">
            {project.category}
          </span>
        </div>

        <h2
          className="font-poppins font-bold text-[20px] md:text-[24px] text-black leading-snug"
          style={{ letterSpacing: '-0.4px' }}
        >
          {project.name}
        </h2>

        <p className="font-poppins font-normal text-[14px] text-gray-600 leading-[1.7] flex-1">
          {project.description}
        </p>

        {/* All tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 border border-gray-200 rounded text-[12px] font-poppins font-medium text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded font-poppins font-semibold text-[13px] hover:bg-gray-800 transition-colors min-h-[44px]"
            >
              <OpenInNewIcon style={{ fontSize: '15px' }} />
              View Site
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded font-poppins font-semibold text-[13px] text-black hover:border-black transition-colors min-h-[44px]"
          >
            <GitHubIcon style={{ fontSize: '15px' }} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
