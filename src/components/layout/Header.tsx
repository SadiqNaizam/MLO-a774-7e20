import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader'; // Assuming TopHeader is in organisms or a similar top-level folder

interface HeaderProps {
  onToggleMobileSidebar: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ onToggleMobileSidebar, className }) => {
  // TopHeader component from context code already handles its own styling (fixed, h-[70px], bg-surface, etc.)
  // It also handles the md:left-64 adjustment for the desktop sidebar.
  return (
    <TopHeader 
      onToggleSidebar={onToggleMobileSidebar} 
      className={cn(className)} 
    />
  );
};

export default Header;
