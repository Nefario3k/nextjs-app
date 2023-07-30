import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';


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

export const mainListItems = (
    <React.Fragment>
        {/* Dashboard */}
        <ListItemButton>
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        {/* Order */}
        <ListItemButton>
            <ListItemIcon>
                <Order />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItemButton>
        {/* Customer */}
        <ListItemButton>
            <ListItemIcon>
                <Customer />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItemButton>
        {/* Inventory */}
        <ListItemButton>
            <ListItemIcon>
                <Inventory />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
        </ListItemButton>
        {/* Conversations */}
        <ListItemButton>
            <ListItemIcon>
                <Conversation />
            </ListItemIcon>
            <ListItemText primary="Conversations" />
        </ListItemButton>
        {/* Settings */}
        <ListItemButton>
            <ListItemIcon>
                <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        {/* Contact */}
        <ListItemButton>
            <ListItemIcon>
                <Contact />
            </ListItemIcon>
            <ListItemText primary="Contact Support" />
        </ListItemButton>
        {/* Free Gift Awaits You! */}
        <ListItemButton>
            <ListItemIcon>
                <Gift />
            </ListItemIcon>
            <ListItemText primary="Free Gift Awaits You!" />
        </ListItemButton>
        {/* Logout */}
        <ListItemButton>
            <ListItemIcon>
                <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
    </React.Fragment>
);