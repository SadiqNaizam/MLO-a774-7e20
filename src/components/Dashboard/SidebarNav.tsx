import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  FileText, 
  Receipt, 
  ShoppingCart, 
  Mail as MailIcon, // Renamed to avoid conflict with Mail component if any
  Archive, 
  CalendarDays, 
  HelpCircle, 
  Settings,
  Briefcase // Placeholder for BO logo
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: Users, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#' },
  { id: 'invoices', label: 'Invoices', icon: Receipt, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingCart, href: '#' },
  { id: 'mail', label: 'Mail', icon: MailIcon, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#' },
];

const footerNavItems: NavItem[] = [
  { id: 'help1', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
  { id: 'help2', label: 'Help', icon: HelpCircle, href: '#' }, // As per image, there are two Help links
];

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  return (
    <aside className={cn('w-64 bg-sidebar text-primary-text flex flex-col h-screen fixed top-0 left-0 p-4 pt-6 border-r border-border', className)}>
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="bg-primary-text text-background p-2 rounded-md">
          <Briefcase size={24} /> 
        </div>
        <span className="font-semibold text-xl">bo</span>
      </div>
      
      <nav className="flex-grow space-y-1">
        {mainNavItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium',
              item.isActive 
                ? 'bg-primary/10 text-primary' 
                : 'hover:bg-muted hover:text-primary-text'
            )}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <nav className="mt-auto space-y-1 border-t border-border pt-4">
        {footerNavItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-secondary-text hover:bg-muted hover:text-primary-text'
            )}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;
