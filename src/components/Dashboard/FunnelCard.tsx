import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string; // Tailwind color class e.g., 'bg-red-500'
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-accent-red' },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' }, // Using a specific yellow
  { id: 'in_conversation', name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-indigo-500' }, // Using a specific indigo
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-accent-green' },
  { id: 'closed_won', name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' }, // Using a specific purple
];

const totalActiveLeads = 600;

interface FunnelCardProps {
  className?: string;
}

const FunnelCard: React.FC<FunnelCardProps> = ({ className }) => {
  const totalCountForProgress = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <TooltipProvider>
      <Card className={cn('w-full', className)}>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text">Funnel count</CardTitle>
          <div className="text-3xl font-bold text-primary-text">{totalActiveLeads} <span className="text-sm font-normal text-secondary-text">active leads</span></div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex h-3 rounded-full overflow-hidden bg-muted">
              {funnelData.map((stage) => (
                <div
                  key={stage.id}
                  className={cn('h-full', stage.color)}
                  style={{ width: `${(stage.count / totalCountForProgress) * 100}%` }}
                />
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {funnelData.map((stage) => (
              <li key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className={cn('w-3 h-3 rounded-sm block', stage.color)}></span>
                  <span className="text-primary-text whitespace-nowrap">{stage.name}</span>
                </div>
                <span className="text-right text-secondary-text tabular-nums">{stage.count}</span>
                <span className="text-right text-secondary-text tabular-nums">$ {stage.value}</span>
                {stage.id === 'in_conversation' ? (
                   <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-right text-secondary-text tabular-nums cursor-default underline decoration-dashed decoration-muted-foreground">
                        {stage.duration.includes('average') ? '2 days' : stage.duration} 
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-primary-text text-background text-xs p-2 rounded-sm">
                      <p>{stage.duration}</p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <span className="text-right text-secondary-text tabular-nums">{stage.duration}</span>
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default FunnelCard;
