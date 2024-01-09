import React from 'react';
import { useTheme } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import './Navbar.css';


const pages = ['Home', 'Menu', 'About', 'Contact'];

const Navbar = () => {

    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" style={{ padding: '0' }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100px' }} >
                        <img src='/images/logo.png' alt='logo' style={{ width: '100%' }} />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon color="primary" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to='/' className='link-route-mobile'>
                                        <Typography textAlign="center" sx={{fontFamily: theme.typography.bebas, fontWeight: '400'}}>Home</Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to='/menu' className='link-route-mobile'>
                                        <Typography textAlign="center" sx={{fontFamily: theme.typography.bebas, fontWeight: '400'}}>Menu</Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to='/about-us' className='link-route-mobile'>
                                        <Typography textAlign="center" sx={{fontFamily: theme.typography.bebas, fontWeight: '400'}}>About</Typography>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to='/contact' className='link-route-mobile'>
                                        <Typography textAlign="center" sx={{fontFamily: theme.typography.bebas, fontWeight: '400'}}>Contact</Typography>
                                    </Link>
                                </MenuItem>
                        </Menu>
                    </Box>
                    {/*VISTA MOVIL?*/}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, width: '100px'}}>
                            <img src="/images/logo.png" alt="logo" style={{ width: '100%'}} />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', marginRight: '30px'}}>
                            <Link to='/' className='link-route'>
                                <Typography
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', marginLeft: '25px', marginRight: '25px', fontFamily: theme.typography.bebas, fontWeight: '300', fontSize: '18px' }}
                                    className='menu-link'
                                >
                                    Home
                                </Typography>
                            </Link>
                            <Link to='/menu' className='link-route'>
                                <Typography
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', marginLeft: '25px', marginRight: '25px', fontFamily: theme.typography.bebas, fontWeight: '300', fontSize: '18px' }}
                                    className='menu-link'
                                >
                                    Menu
                                </Typography>
                            </Link>
                            <Link to='/about-us' className='link-route'>
                                <Typography
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', marginLeft: '25px', marginRight: '25px', fontFamily: theme.typography.bebas, fontWeight: '300', fontSize: '18px'}}
                                    className='menu-link'
                                >
                                    About
                                </Typography>
                            </Link>
                            <Link to='/contact' className='link-route'>
                                <Typography
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', marginLeft: '25px', marginRight: '25px', fontFamily: theme.typography.bebas, fontWeight: '300', fontSize: '18px' }}
                                    className='menu-link'
                                >
                                    Contact
                                </Typography>
                            </Link>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
