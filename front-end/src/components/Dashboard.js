import React from 'react';

import BookDashboardCard from './BookDashboardCard';
import NoteDashboardCard from './NoteDashboardCard';
import QuestionDashboardCard from './QuestionDashboardCard';
import ProjectDashboardCard from './ProjectDashboardCard';
import UserDashboardCard from '../components/UserDashboardCard';

const Dashboard = () => {
  const DashboardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    width: 'fit-content',
    padding: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',

    marginTop: '20px',
  };

  const DashboardRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: 'fit-content',
    width: 'fit-content',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

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
