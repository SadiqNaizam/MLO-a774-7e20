import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className }) => {
  const [activeTab, setActiveTab] = React.useState<string>('leads');
  const [selectedPeriod, setSelectedPeriod] = React.useState<string>('Last 6 months');

  return (
    <div className={cn('flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4', className)}>
      <div>
        <h1 className="text-3xl font-semibold text-primary-text mb-2 sm:mb-0">{title}</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-2 sm:w-auto bg-transparent p-0">
            <TabsTrigger 
              value="sales" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground rounded-none px-4 py-2.5"
            >
              Sales
            </TabsTrigger>
            <TabsTrigger 
              value="leads" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground rounded-none px-4 py-2.5"
            >
              Leads
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full sm:w-auto text-secondary-text border-border hover:border-primary hover:text-primary">
            <CalendarDays size={16} className="mr-2" />
            {selectedPeriod}
            <ChevronDown size={16} className="ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {['Last 24 hours', 'Last 7 days', 'Last 30 days', 'Last 6 months', 'Last 12 months'].map(period => (
            <DropdownMenuItem key={period} onSelect={() => setSelectedPeriod(period)}>
              {period}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PageHeader;
