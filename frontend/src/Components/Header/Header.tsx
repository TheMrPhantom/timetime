import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Config from '../../environment.json';
import BuildNumber from '../../BuildNumber.json'
type Props = {
    open: boolean
}

const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => console.log("clicked")}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {Config.ORGA_NAME} - TimeTime
                </Typography>
                <Typography variant="caption" component="div" sx={{ flexGrow: 1 }}>
                    Build Nummer - {BuildNumber}
                </Typography>
                <Button color="inherit" >Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header