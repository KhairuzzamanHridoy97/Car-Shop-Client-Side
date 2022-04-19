import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AddProduct from '../AddProducts/AddProducts';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AddReview from '../AddReview/AddReview';
import DashboardHome from '../DashboardHome/DashboardHome';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin}= useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider/>
      <Link style={{ textDecoration: 'none' }} to='/home'>
            <button color="inherit" className='btn btn-primary my-2'>Home</button>
        </Link>

      {
        admin && 
        <Box>
            <br />
        <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`}>
             <Button color="inherit">Add Product</Button>
         </Link>

         <Link style={{textDecoration:'none'}} to={`${url}/manageAllProducts`}>
           <button   className='btn btn-warning my-1'>ManageAllProducts</button>
         </Link>
         <Link style={{textDecoration:'none'}} to={`${url}/manageAllOrders`}>
           <button  className='btn btn-warning my-1'>ManageAllOrders</button>
         </Link>
         <br />
         <Link style={{textDecoration:'none'}} to={`${url}/makeAdmin`}>
           <button  className='btn btn-warning my-1'>Make Admin</button>
         </Link>
        </Box>
      }

      {
        !admin && 
        <Box>
             <br />
         <Link style={{textDecoration:'none'}} to={`${url}/myOrders`}>
           {/* <Button color='inherit'>My Orders</Button> */}
           <button className='btn btn-primary my-2'>My Order</button>
         </Link> 
        
         <br />
         <Link style={{textDecoration:'none',}} to={`${url}/addReview`}>
           {/* <Button color='inherit'>Add Review</Button> */}
           <button className='btn btn-primary my-2'>Add Review</button>
         </Link>
        </Box> 
      }

       

      
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
       
        </Typography>
        <Switch>
        <Route exact path={path}>
            <DashboardHome></DashboardHome>
        </Route>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/manageAllProducts`}>
              <ManageAllProducts></ManageAllProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>            
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
