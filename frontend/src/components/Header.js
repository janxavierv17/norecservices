import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import Menu from "@material-ui/core/Menu"
import { Link } from "react-router-dom"
// import Link from '@material-ui/core/Link';
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
    }
}))

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar >
                    <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose} >
                            <Link to="/account" > My Account </Link>
                        </MenuItem>

                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        <ListItem color="inherit" button component={Link} to="/">Norec Services</ListItem>
                    </Typography>
                    <Button component={Link} to="/login" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;