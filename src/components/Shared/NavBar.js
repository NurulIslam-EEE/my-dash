import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default function ElevateAppBar(props) {
    // const useStyle = makeStyles({
    //     bgColor:'white !important'
    // })
    // const {bgColor } = useStyle();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className='nav-container'>
          <Toolbar className='nav '>
           <img src={logo} height='60px' width='80px'alt=''/>
           <Box className='nav-menu'>
            <Link className='nav-item' to='/'> <p>Home</p></Link>
            <p className='nav-item'>About</p>
            <p className='nav-item'>product</p>
            <p className='nav-item'>pricing</p>
            <p className='nav-item'>Blogs</p>
          </Box>
          </Toolbar>
         
        </AppBar>
      </ElevationScroll>
      <Toolbar />
   
   </React.Fragment>
  );
}
