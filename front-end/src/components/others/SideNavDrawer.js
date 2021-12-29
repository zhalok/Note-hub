import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import { Button, MenuItem } from '@mui/material';
import { Redirect } from 'react-router-dom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DescriptionIcon from '@mui/icons-material/Description';
import QuizIcon from '@mui/icons-material/Quiz';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { useHistory } from 'react-router-dom';
import ContactPageIcon from '@mui/icons-material/ContactPage';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

// let windowUrl = 'https://notehub-font-end.web.app/';

export default function SideNavbarDrawer({
	loggedInState,
	handleLog,
	setRedirect,
	userId,
}) {
	let History = useHistory();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	let items = [
		{ label: 'Log in', icon: LoginIcon },
		{ label: 'Sign up', icon: AppRegistrationIcon },
	];
	if (loggedInState == true)
		items = [
			{ label: 'Log out', icon: LogoutIcon },
			{ label: 'Profile', icon: ContactPageIcon },
		];

	console.log(loggedInState);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position='fixed' open={open}>
				<Toolbar style={{ backgroundColor: '#062030' }}>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						Menu
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant='persistent'
				anchor='left'
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{[
						{ label: 'Home', link: '/', icon: HomeIcon },
						{ label: 'Books', link: '/books', icon: LibraryBooksIcon },
						{ label: 'Notes', link: '/notes', icon: DescriptionIcon },
						{ label: 'Questions', link: '/questions', icon: QuizIcon },
						{ label: 'Projects', link: '/projects', icon: AccountTreeIcon },
						{ label: 'Discussions', link: '/discussions', icon: ForumIcon },
						{ label: 'Contributors', link: '/users', icon: GroupIcon },
						{ label: 'Contribute', link: '/contribute', icon: AddLinkIcon },
					].map((element, index) => (
						<ListItem
							component={Link}
							button
							key={element.label}
							to={element.link}
							// onClick={() => {
							// 	window.location = `http://localhost:3000/${element.link}`;
							// }}
						>
							<ListItemIcon>{<element.icon color='primary' />}</ListItemIcon>
							<ListItemText primary={element.label} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{items.map((element, index) => (
						<ListItem
							button
							key={element.label}
							onClick={() => {
								if (element.label == 'Log out') {
									handleLog();
								} else if (element.label == 'Profile') {
									History.push(`/profile/${userId}`);
								} else if (element.label == 'Log in') {
									History.push('/login');
								} else if (element.label == 'Sign up') {
									History.push('/signup');
								}
							}}
						>
							<ListItemIcon>{<element.icon color='primary' />}</ListItemIcon>
							<ListItemText primary={element.label} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
			</Main>
		</Box>
	);
}
