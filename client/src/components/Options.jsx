import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper, Box } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import { SocketContext } from '../SocketContext';

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container maxWidth="sm">
      <Paper elevation={10} sx={{ padding: '20px' }}>
        <form noValidate autoComplete="off">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              {/* {console.log(me)}
              {console.log("Hi")} */}
              <CopyToClipboard text={me}>
                <Button variant="contained" color="primary" fullWidth startIcon={<ContentCopyOutlinedIcon />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {callAccepted && !callEnded ? (
                  <Button variant="contained" color="secondary" fullWidth startIcon={<PhoneDisabledIcon />} onClick={leaveCall}>
                    Hang Up
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" fullWidth startIcon={<PhoneIcon />} onClick={() => callUser(idToCall)}>
                    Call
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
