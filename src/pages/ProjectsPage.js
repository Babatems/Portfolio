import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavBar from '../NavBar';
import Footer from '../sections/Footer';
import { projects } from '../data/projects';
import ViewSwitcher from '../components/projects/ViewSwitcher';
import GridCard from '../components/projects/GridCard';
import ListCard from '../components/projects/ListCard';
import CompactCard from '../components/projects/CompactCard';

const getStoredView = () => {
  try { return localStorage.getItem('portfolio-view-mode') || 'grid'; }
  catch { return 'grid'; }
};

const gridClass = {
  grid:    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
  list:    'flex flex-col gap-6',
  compact: 'flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden px-1',
};

export default function ProjectsPage() {
  const [visible, setVisible] = useState(false);
  const [viewMode, setViewMode] = useState(getStoredView);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const handleViewChange = (mode) => {
    if (mode === viewMode) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setViewMode(mode);
      try { localStorage.setItem('portfolio-view-mode', mode); } catch {}
      setAnnouncement(`View changed to ${mode} mode`);
      setIsTransitioning(false);
    }, 150);
  };

  const CardComponent = { grid: GridCard, list: ListCard, compact: CompactCard }[viewMode];

  return (
    <div
      className={`bg-white min-h-screen flex flex-col transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <NavBar />

      {/* Screen reader announcement */}
      <span aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </span>

      <div className="flex-1 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] pt-28 md:pt-36 pb-[10vh]">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-poppins font-medium text-[14px] md:text-[16px] text-gray-500 hover:text-black transition-colors duration-200 mb-10 group"
        >
          <ArrowBackIcon
            className="transition-transform duration-200 group-hover:-translate-x-1"
            style={{ fontSize: '18px' }}
          />
          Back to Home
        </Link>

        {/* Header row */}
        <div className="flex justify-between items-end mb-[50px] md:mb-[60px] gap-4">
          <div>
            <h1
              className="text-black font-poppins font-bold text-[32px] md:text-[48px] lg:text-[56px] leading-[40px] md:leading-[58px] lg:leading-[66px] mb-3"
              style={{ letterSpacing: '-0.4px' }}
            >
              All Projects
            </h1>
            <p className="text-gray-600 font-normal font-poppins text-[15px] md:text-[17px] leading-[24px]">
              {projects.length} projects
            </p>
          </div>
          <div className="flex-shrink-0">
            <ViewSwitcher viewMode={viewMode} onChange={handleViewChange} />
          </div>
        </div>

        {/* Project list */}
        <div
          className={`transition-opacity duration-150 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className={gridClass[viewMode]}>
            {projects.map((project) => (
              <CardComponent key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
