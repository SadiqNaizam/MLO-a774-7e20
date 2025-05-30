import React from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface StatCardProps {
  value: string;
  description: string;
  icon?: React.ElementType;
  iconTooltip?: string;
  className?: string;
  valueClassName?: string;
  descriptionClassName?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  description,
  icon: IconComponent,
  iconTooltip,
  className,
  valueClassName,
  descriptionClassName
}) => {
  return (
    <TooltipProvider>
      <div className={cn('flex flex-col', className)}>
        <div className={cn('font-bold text-primary-text', valueClassName || 'text-4xl')}>
          {value}
        </div>
        <div className={cn('text-secondary-text flex items-center gap-1', descriptionClassName || 'text-base')}>
          <span>{description}</span>
          {IconComponent && (
            iconTooltip ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <IconComponent size={14} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-primary-text text-background text-xs p-2 rounded-sm">
                  <p>{iconTooltip}</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <IconComponent size={14} className="text-muted-foreground" />
            )
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default StatCard;
