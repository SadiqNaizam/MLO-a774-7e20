import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);

  const toggleMobileSidebar = React.useCallback(() => {
    setIsMobileSidebarOpen(prev => !prev);
  }, []);

  // Close mobile sidebar when navigating (if using React Router, for example)
  // This is a common UX pattern. For this example, it's commented out
  // as router integration is not specified.
  // const location = useLocation(); // Assuming react-router-dom
  // React.useEffect(() => {
  //   if (isMobileSidebarOpen) {
  //     setIsMobileSidebarOpen(false);
  //   }
  // }, [location.pathname]); // Add isMobileSidebarOpen to dependency array if ESLint complains

  return (
    <div className={cn('min-h-screen bg-background', className)}>
      <Sidebar isMobileOpen={isMobileSidebarOpen} />

      {/* Overlay for mobile to close sidebar on click outside */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={toggleMobileSidebar}
          aria-hidden="true"
        />
      )}
      
      {/* Header component: TopHeader is styled with fixed position and z-10 */}
      {/* It will correctly sit at left-0 on mobile and left-64 on desktop (md:left-64) */}
      <Header onToggleMobileSidebar={toggleMobileSidebar} />

      {/* Main content area */}
      <main
        className={cn(
          'pt-[70px]', // Fixed header height (h-[70px])
          'min-h-screen', // Ensure content area can fill screen under header
          'md:ml-64',   // Offset for the fixed sidebar on desktop (w-64)
          'transition-all duration-300 ease-in-out' // For smooth transition if ml ever becomes dynamic
        )}
      >
        {/* Actual page content container with padding as per layout requirements */}
        {/* Layout Requirements: mainContent.layout = "p-6" */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
