import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Dashboard/PageHeader';
import FunnelCard from '../components/Dashboard/FunnelCard';
import SourcesCard from '../components/Dashboard/SourcesCard';
import TrackingChart from '../components/Dashboard/TrackingChart';
import StatisticsGrid from '../components/Dashboard/StatisticsGrid';

/**
 * LeadsDashboardPage serves as the main view for the leads tracking dashboard.
 * It utilizes MainAppLayout for the overall page structure (sidebar, header)
 * and assembles various dashboard-specific organism components within the main content area.
 */
const LeadsDashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* Container for all dashboard content, applying vertical stacking and gaps */}
      {/* This aligns with layoutRequirements.mainContent.container */}
      <div className="flex flex-col gap-6">
        {/* PageHeader displays the title "Dashboard" and relevant tabs/filters */}
        <PageHeader title="Dashboard" />
        
        {/* Section for FunnelCard and SourcesCard, displayed side-by-side on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FunnelCard />
          <SourcesCard />
        </div>

        {/* Section for the main TrackingChart, typically spanning full width */}
        <TrackingChart />

        {/* Section for StatisticsGrid, also typically spanning full width */}
        <StatisticsGrid />
      </div>
    </MainAppLayout>
  );
};

export default LeadsDashboardPage;
