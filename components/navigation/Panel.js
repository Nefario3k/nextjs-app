import * as React from 'react';
// import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Lists from './list';
import Logo from '@/static/svg/logo';
import { Divider } from '@mui/material';
// icons 
import ArrowDown from '@/static/svg/arrowDown';
import Notification from '@/static/svg/notification';
import HomeIcon from '@/static/svg/home';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';

const { MainListItems, SecondaryListItems } = Lists


const drawerWidth = 296;
const appHeight = 84;

// app bar 
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    height: appHeight,
    backgroundColor: '#fff',
    boxShadow: 'none',
    border: 'none',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

// drawer 
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            backgroundColor: '#fff',
            border: 'none',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: appHeight,
                [theme.breakpoints.up('sm')]: {
                    width: appHeight,
                },
            }),
        },
    }),
);

export default function ResponsiveDrawer(props) {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <Toolbar
                sx={{
                    display: open ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: [0],
                    maxWidth: '85%',
                    margin: `14px auto 34px`,
                    width: '100%',
                    minHeight: 'max-content !important',
                }}
            >
                <div className='userLogo'>
                    <Logo />
                    <span>Metrix</span>
                </div>
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <List style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gridGap: '10px', overflow: 'auto', marginTop: !open ? appHeight + 'px' : '0' }} component="nav">
                <div className='navContent'>
                    <MainListItems open={open} />
                </div>
                <div className='navContent'>
                    <SecondaryListItems open={open} />
                </div>
            </List>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            {/* sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },

            }} */}
            <AppBar
                position="absolute"
                open={open}

            >
                <Toolbar
                    className='appBar'
                    sx={{
                        pr: [0],
                        py: [1],
                        height: '100%',
                        ...(open && { pl: [0] }),
                    }}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        className='deskburger'
                        sx={{
                            marginRight: '14px',
                            ...(open && { display: 'none', }),
                        }}
                    >
                        <div className="logo" >
                            <Logo />
                        </div>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                        className='mobileburger'
                    >
                        <div className="logo" >
                            <Logo />
                        </div>
                    </IconButton>
                    <div style={{ flexGrow: 1 }}>
                        <div className='barContent'>
                            <p className='useLocation' >Dashboard</p>
                            <div className='rightSide'>
                                {/* drowpDownbtn */}
                                <IconButton className='Btn drowpDownbtn' color="var(--black2)">
                                    <span>Nanny’s Shop</span>
                                    <ArrowDown />
                                </IconButton>
                                {/* notifications */}
                                <IconButton className='Btn notifications' aria-label="notifications" title="notifications">
                                    <Notification />
                                </IconButton>
                                {/* user */}
                                <IconButton className='Btn userImage'>
                                    <img src='../../static/image/user.jpg' alt="user" />
                                </IconButton>
                            </div>
                        </div>
                        <Divider />
                        <div className='belowDivdier'>
                            <Breadcrumbs className='breadCrumbUser' aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" href="/">
                                    <HomeIcon />
                                </Link>
                                <Link
                                    underline="hover"
                                    color="inherit"
                                    href="/conversations"
                                >
                                    Conversations
                                </Link>
                            </Breadcrumbs>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>

            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            {/* '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth }, */}
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}


