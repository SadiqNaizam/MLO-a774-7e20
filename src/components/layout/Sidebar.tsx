import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  isMobileOpen: boolean;
  // className prop can be used by parent for additional styling if needed,
  // but transformations are handled internally based on isMobileOpen.
  className?: string; 
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, className }) => {
  return (
    // This div controls the visibility and transition of SidebarNav.
    // SidebarNav itself has 'fixed top-0 left-0 w-64 h-screen' styling.
    // When an ancestor has 'transform', 'fixed' positioned elements
    // are contained by that ancestor. This is leveraged for the slide-in/out effect.
    <div
      className={cn(
        'fixed top-0 left-0 h-screen w-64 z-30',
        'transition-transform duration-300 ease-in-out',
        isMobileOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0', // Ensures sidebar is always visible and correctly positioned on desktop
        className
      )}
      aria-hidden={!isMobileOpen && typeof window !== 'undefined' && window.innerWidth < 768}
    >
      <SidebarNav /> 
      {/* SidebarNav is imported and includes its own styling (bg, padding, border, etc) */}
    </div>
  );
};

export default Sidebar;
