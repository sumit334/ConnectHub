import React from 'react';
import './App.css';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'; // Import Box component from @mui/material
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      sx={{
        '& .MuiAppBar-root': {
          borderRadius: 15,
          margin: '30px 100px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '600px',
          border: '2px solid black',
          '@media (max-width: 600px)': {
            width: '90%',
          },
        },
      }}
    >
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          ConnectHub
        </Typography>
      </AppBar>

      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </Box>
  );
}

export default App;
