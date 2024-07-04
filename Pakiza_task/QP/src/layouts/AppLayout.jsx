import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { Box } from '@mui/material';
import { styled } from '@mui/system';

const Sidebar = styled(Box)({
  width: '250px',
  padding: '20px',
  borderRight: '1px solid #ddd',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const MainContent = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const LayoutContainer = styled(Box)({
  display: 'flex',
});

const drawerWidth = 240;

const AppLayout = () => {
  return (
    <>
    <Navbar position="fixed" style={{ zIndex: 1201 , backgroundColor: '#fff'}}>
    <Toolbar>
      <Typography variant="h6" noWrap>
        Quantum Possibilities
      </Typography>
    </Toolbar>
  </Navbar>
    <div style={{ display: 'flex' }}>
      <CssBaseline />
     

      <main style={{ flexGrow: 1, padding: 24, marginLeft: drawerWidth }}>
        <Toolbar />
        <Container>
          <Outlet />
        </Container>

      </main>
    </div>
    </>
  );
};

export default AppLayout;


// File: CommonLayout.js



// const CommonLayout = ({ sidebar, children }) => {
//   return (
//     <Box>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">Story</Typography>
//         </Toolbar>
//       </AppBar>
//       <LayoutContainer>
//         <Sidebar>
//           {sidebar}
//         </Sidebar>
//         <MainContent>
//           <Container>
//             {children}
//           </Container>
//         </MainContent>
//       </LayoutContainer>
//     </Box>
//   );
// };

// export default CommonLayout;
