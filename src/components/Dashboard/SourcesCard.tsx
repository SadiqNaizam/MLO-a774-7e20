import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';

interface SourceDataPoint {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const sourcesData: SourceDataPoint[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF4444' }, // accent-red
  { name: 'Behance', value: 1000, percentage: 40, color: '#F59E0B' }, // amber-500 (yellow)
  { name: 'Instagram', value: 1000, percentage: 10, color: '#14B8A6' }, // teal-500
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#86EFAC' }, // green-300 (light green)
];

interface SourcesCardProps {
  className?: string;
}

const SourcesCard: React.FC<SourcesCardProps> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<string>('leads-converted');

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-primary-text text-background p-2 rounded-md shadow-lg text-xs">
          <p>{`${payload[0].name} : ${payload[0].value}`}</p>
          <p className="text-muted-foreground ">from leads total</p>
        </div>
      );
    }
    return null;
  };

  return (
    <TooltipProvider>
      <Card className={cn('w-full', className)}>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary-text">Sources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }}/>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  innerRadius={50}
                  fill="#8884d8"
                  dataKey="value"
                  strokeWidth={0}
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <ul className="space-y-2 mb-6">
            {sourcesData.map((source) => (
              <li key={source.name} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className={'w-3 h-3 rounded-sm block'} style={{ backgroundColor: source.color }}></span>
                  <span className="text-primary-text">{source.name}</span>
                </div>
                <span className="text-right text-secondary-text tabular-nums">$ {source.value}</span>
                <span className="text-right text-secondary-text tabular-nums">
                  {source.name === 'Dribbble' ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-default underline decoration-dashed decoration-muted-foreground">
                          {source.percentage}%
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-primary-text text-background text-xs p-2 rounded-sm">
                        <p>from leads total</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    `${source.percentage}%`
                  )}
                </span>
              </li>
            ))}
          </ul>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted p-1 rounded-md">
              <TabsTrigger value="leads-came" className="text-xs px-2 py-1.5 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-sm">Leads came</TabsTrigger>
              <TabsTrigger value="leads-converted" className="text-xs px-2 py-1.5 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-sm">Leads Converted</TabsTrigger>
              <TabsTrigger value="total-deals-size" className="text-xs px-2 py-1.5 data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-sm">Total deals size</TabsTrigger>
            </TabsList>
          </Tabs>

        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default SourcesCard;
