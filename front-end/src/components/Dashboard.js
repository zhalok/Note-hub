import React from 'react';

import BookDashboardCard from './BookDashboardCard';
import NoteDashboardCard from './NoteDashboardCard';
import QuestionDashboardCard from './QuestionDashboardCard';
import ProjectDashboardCard from './ProjectDashboardCard';
const DashboardStyle = require('../styles/DashboardStyle');
const DashboardRowStyle = require('../styles/DashboardRowStyle');

const Dashboard = () => {
  return (
    <div style={DashboardStyle}>
      <div style={DashboardRowStyle}>
        <BookDashboardCard />
        <NoteDashboardCard />
        <QuestionDashboardCard />
        <ProjectDashboardCard />
      </div>
    </div>
  );
};

export default Dashboard;
