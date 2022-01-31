import React from 'react';

import BookDashboardCard from '../cards/BookDashboardCard';
import NoteDashboardCard from '../cards/NoteDashboardCard';
import QuestionDashboardCard from '../cards/QuestionDashboardCard';
import ProjectDashboardCard from '../cards/ProjectDashboardCard';
import DiscussionDashboardCard from '../cards/DiscussionDashboardCard';
import ContributorDashboardCard from '../cards/ContributorDashboardCard';

const Dashboard = (props) => {
	const { books, notes, questions, projects, discussions, contributors } =
		props;
	return (
		<div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: '20px',
					width: 'fit-content',
					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
					<BookDashboardCard books={books} />
					<NoteDashboardCard notes={notes} />
				</div>
				<div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
					<QuestionDashboardCard questions={questions} />
					<ProjectDashboardCard projects={projects} />
				</div>
				<div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
					<DiscussionDashboardCard discussions={discussions} />
					<ContributorDashboardCard contributors={contributors} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
