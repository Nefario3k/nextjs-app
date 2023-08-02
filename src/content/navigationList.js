import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import AssignmentIcon from '@mui/icons-material/Assignment';


// svg icons 
import Dashboard from '@/static/svg/dashboard';
import Order from '@/static/svg/order';
import Customer from '@/static/svg/customer';
import Inventory from '@/static/svg/inventory';
import Conversation from '@/static/svg/conversation';
import Settings from '@/static/svg/settings';
import Contact from '@/static/svg/contact';
import Gift from '@/static/svg/gift';
import Logout from '@/static/svg/logout';
import ArrowLeft from '@/static/svg/arrowLeft';
import Link from 'next/link'
import { useRouter } from "next/router";

function MainListItems(props) {
    const router = useRouter();
    return <React.Fragment>
        {/* Dashboard */}

        <Link href='/' className={`${!props.open ? 'close' : ''} ${router.pathname == '/' ? 'active' : ''}`}>
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </Link>
        {/* Order */}
        <Link href='/orders' className={`${!props.open ? 'close' : ''} ${router.pathname == '/orders' ? 'active' : ''}`}>
            <ListItemIcon>
                <Order />
            </ListItemIcon>
            <ListItemText primary="Orders" />
            <span className='infomatics'>3</span>
        </Link>
        {/* Customer */}
        <Link href='/customers' className={`${!props.open ? 'close' : ''} ${router.pathname == '/customers' ? 'active' : ''}`}>
            <ListItemIcon>
                <Customer />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </Link>
        {/* Inventory */}
        <Link href='/inventory' className={`${!props.open ? 'close' : ''} ${router.pathname == '/inventory' ? 'active' : ''}`}>
            <ListItemIcon>
                <Inventory />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
        </Link>
        {/* Conversations */}
        <Link href='/conversations' className={`${!props.open ? 'close' : ''} ${router.pathname == '/conversations' ? 'active' : ''}`}>
            <ListItemIcon>
                <Conversation />
            </ListItemIcon>
            <ListItemText primary="Conversations" />
            <span className='infomatics'>16</span>
        </Link>
        {/* Settings */}
        <Link href='/settings' className={`${!props.open ? 'close' : ''} ${router.pathname == '/settings' ? 'active' : ''}`}>
            <ListItemIcon>
                <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </Link>
    </React.Fragment>
};

function SecondaryListItems(props) {
    const router = useRouter();
    return <React.Fragment>
        {/* Contact */}
        <Link href='/contact' className={`contactRoute noHover ${!props.open ? 'close' : ''} ${router.pathname == '/contact' ? 'active' : ''}`}>
            <ListItemIcon>
                <Contact />
            </ListItemIcon>
            <ListItemText primary="Contact Support" />
        </Link>
        {/* Free Gift Awaits You! */}
        <Link href='/gift' className={`gift noHover ${!props.open ? 'close' : ''} ${router.pathname == '/gift' ? 'active' : ''}`}>
            <ListItemIcon>
                <Gift />
            </ListItemIcon>
            <ListItemText primary="Free Gift Awaits You!" />
            <div className='upgrade'>
                <span>Upgrade your account</span>
                <div>
                    <ArrowLeft />
                </div>
            </div>
        </Link>
        {/* Logout */}
        <ListItemButton title='logout' className={`logout noHover ${!props.open ? 'close' : ''}`}>
            <ListItemIcon>
                <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
    </React.Fragment>
};

export default { MainListItems, SecondaryListItems }