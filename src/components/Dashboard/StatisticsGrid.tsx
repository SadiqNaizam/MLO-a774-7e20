import React from 'react';
import { cn } from '@/lib/utils';
import StatCard, { StatCardProps } from './StatCard'; // Relative import
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

const reasonsLostData: Omit<StatCardProps, 'className'>[] = [
  { value: '40%', description: 'The proposal is unclear' },
  { value: '20%', description: 'However venture pursuit' },
  { value: '10%', description: 'Other' },
  { value: '30%', description: 'The proposal is unclear' }, // Duplicated as per image
];

const otherData: Omit<StatCardProps, 'className'>[] = [
  { value: '900', description: 'total leads count' },
  { value: '12', description: 'days in average to convert lead' },
  { value: '30', description: 'inactive leads', icon: Info, iconTooltip: 'Information about inactive leads' },
];

interface StatisticsGridProps {
  className?: string;
}

const StatisticsGrid: React.FC<StatisticsGridProps> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-6', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          {reasonsLostData.map((stat, index) => (
            <StatCard 
              key={`reason-${index}`}
              value={stat.value}
              description={stat.description}
              valueClassName="text-3xl"
              descriptionClassName="text-sm"
            />
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text">Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-8">
          {otherData.map((stat, index) => (
            <StatCard 
              key={`other-${index}`}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
              iconTooltip={stat.iconTooltip}
              valueClassName="text-3xl"
              descriptionClassName="text-sm"
              className="text-center sm:text-left"
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatisticsGrid;
