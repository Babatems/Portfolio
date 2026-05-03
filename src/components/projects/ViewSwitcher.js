import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const modes = [
  { id: 'grid',    label: 'Grid View',    Icon: GridViewIcon },
  { id: 'list',    label: 'List View',    Icon: ViewListIcon },
  { id: 'compact', label: 'Compact View', Icon: DensityMediumIcon },
];

export default function ViewSwitcher({ viewMode, onChange }) {
  return (
    <div className="flex" role="group" aria-label="Project view mode">
      {modes.map(({ id, label, Icon }, i) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          aria-label={`Switch to ${label}`}
          aria-pressed={viewMode === id}
          title={label}
          className={[
            'relative flex items-center justify-center w-10 h-10 border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1',
            i === 0 ? 'rounded-l-md' : '',
            i === modes.length - 1 ? 'rounded-r-md' : '',
            i > 0 ? '-ml-px' : '',
            viewMode === id
              ? 'bg-black text-white border-black z-10'
              : 'bg-white text-gray-400 border-gray-300 hover:text-black hover:border-black hover:z-10',
          ].join(' ')}
        >
          <Icon style={{ fontSize: '18px' }} />
        </button>
      ))}
    </div>
  );
}
