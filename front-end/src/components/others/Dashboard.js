import React from 'react';

import BookDashboardCard from './BookDashboardCard';
import NoteDashboardCard from './NoteDashboardCard';
import QuestionDashboardCard from './QuestionDashboardCard';
import ProjectDashboardCard from './ProjectDashboardCard';
const DashboardStyle = require('../styles/DashboardStyle');
const DashboardRowStyle = require('../styles/DashboardRowStyle');

const Dashboard = (props) => {
	const { books, notes, questions, projects } = props;
	return (
		<div style={DashboardStyle}>
			<div style={DashboardRowStyle}>
				<BookDashboardCard books={books} />
				<NoteDashboardCard notes={notes} />
				<QuestionDashboardCard questions={questions} />
				<ProjectDashboardCard projects={projects} />
			</div>
		</div>
	);
};

export default Dashboard;
