import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

const drawerWidth = 240;

const AppLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Quantum Possibilities
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        style={{ width: drawerWidth }}
        classes={{ paper: { width: drawerWidth, boxSizing: 'border-box' } }}
      >
        <Toolbar />
        <div style={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} to="/home">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/posts">
              <ListItemText primary="Posts" />
            </ListItem>
            <ListItem button component={Link} to="/stories">
              <ListItemText primary="Stories" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main style={{ flexGrow: 1, padding: 24, marginLeft: drawerWidth }}>
        <Toolbar />
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default AppLayout;
