import React, { useContext, useEffect } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { SocketContext } from '../SocketContext';


const StyledVideo = styled('video')({
  width: '550px',
  '@media (max-width: 600px)': {
    width: '300px',
  },
});


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '10px',
  border: '2px solid black',
  margin: '10px',
}));


const VideoPlayer = () => {
  const { name, callAccepted, myVideoRef, userVideoRef, callEnded, stream, call } = useContext(SocketContext);

  useEffect(() => {
    if (stream && myVideoRef.current) {
      myVideoRef.current.srcObject = stream;
    }
  }, [stream, myVideoRef]);

 
  useEffect(() => {
    if (callAccepted && !callEnded && userVideoRef.current) {
      userVideoRef.current.srcObject = call?.stream;
    }
  }, [callAccepted, callEnded, call, userVideoRef]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      {stream && (
        <StyledPaper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <StyledVideo playsInline muted ref={myVideoRef} autoPlay />
          </Grid>
        </StyledPaper>
      )}
      {callAccepted && !callEnded && (
        <StyledPaper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <StyledVideo playsInline ref={userVideoRef} autoPlay />
          </Grid>
        </StyledPaper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
