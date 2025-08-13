import { useNavigate } from 'react-router-dom';

const GoBackButton = ({ 
  to = '/events', 
  text = 'Back to Events',
  className = '',
  variant = 'default' // 'default', 'minimal', 'floating'
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (to === 'back') {
      navigate(-1);
    } else {
      navigate(to);
    }
  };

  const getButtonStyles = () => {
    const baseStyles = 'inline-flex items-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500';
    
    switch (variant) {
      case 'minimal':
        return `${baseStyles} text-indigo-600 hover:text-indigo-800 text-sm font-medium`;
      case 'floating':
        return `${baseStyles} fixed top-24 left-4 z-50 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-200 px-3 py-2 rounded-lg shadow-lg hover:shadow-xl`;
      default:
        return `${baseStyles} bg-white/70 backdrop-blur-sm border border-slate-200 text-slate-700 hover:text-indigo-600 hover:border-indigo-200 hover:bg-white/90 px-4 py-2 rounded-lg font-medium`;
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className={`${getButtonStyles()} ${className}`}
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {text}
    </button>
  );
};

export default GoBackButton;