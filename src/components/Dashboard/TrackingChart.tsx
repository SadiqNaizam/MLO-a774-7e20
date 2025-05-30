import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const trackingChartData = [
  { name: 'March', closedWon: 65, closedLost: 88 },
  { name: 'April', closedWon: 42, closedLost: 60 }, 
  { name: 'May', closedWon: 78, closedLost: 45 },
  { name: 'June', closedWon: 62, closedLost: 15 },
  { name: 'July', closedWon: 85, closedLost: 42 },
  { name: 'August', closedWon: 32, closedLost: 95 },
];

interface TrackingChartProps {
  className?: string;
}

const TrackingChart: React.FC<TrackingChartProps> = ({ className }) => {
  const [selectedPeriod, setSelectedPeriod] = React.useState<string>('Last 6 months');

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold text-primary-text">Leads tracking</CardTitle>
          <div className="text-sm text-secondary-text mt-1">
            <span className="text-2xl font-bold text-primary-text mr-1">680</span> total closed
            <span className="text-2xl font-bold text-primary-text ml-4 mr-1">70</span> total lost
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-secondary-text hover:text-primary">
              {selectedPeriod}
              <ChevronDown size={16} className="ml-1" />
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
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trackingChartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                fontSize={12} 
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                fontSize={12} 
                stroke="hsl(var(--muted-foreground))"
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))',
                  borderRadius: 'var(--radius)',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }}
                labelStyle={{ color: 'hsl(var(--card-foreground))', fontWeight: '500' }}
              />
              <Area type="monotone" dataKey="closedWon" stroke="#10B981" fillOpacity={1} fill="url(#colorClosedWon)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#10B981' }} activeDot={{ r: 6, fill: '#10B981', stroke: 'hsl(var(--card))' }} name="Closed won"/>
              <Area type="monotone" dataKey="closedLost" stroke="#EF4444" fillOpacity={1} fill="url(#colorClosedLost)" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#EF4444' }} activeDot={{ r: 6, fill: '#EF4444', stroke: 'hsl(var(--card))' }} name="Closed lost" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center space-x-6 mt-4 text-sm text-secondary-text">
            <div className="flex items-center">
                <span className="w-3 h-3 rounded-sm bg-accent-green mr-2"></span>
                <span>Closed won</span>
            </div>
            <div className="flex items-center">
                <span className="w-3 h-3 rounded-sm bg-accent-red mr-2"></span>
                <span>Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrackingChart;
